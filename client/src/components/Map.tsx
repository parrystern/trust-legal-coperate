/// <reference types="@types/google.maps" />

import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

const env = (
  import.meta as ImportMeta & {
    env: Record<string, string | undefined>;
  }
).env;

const API_KEY = env.VITE_FRONTEND_FORGE_API_KEY;

const FORGE_BASE_URL =
  env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";

const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;
const GOOGLE_MAPS_SCRIPT_ID = "google-maps-api-script";

let googleMapsPromise: Promise<typeof google> | null = null;

function loadGoogleMaps(): Promise<typeof google> {
  if (window.google?.maps) {
    return Promise.resolve(window.google);
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  if (!API_KEY) {
    return Promise.reject(
      new Error(
        "Google Maps API key is missing. " +
          "Set VITE_FRONTEND_FORGE_API_KEY in your environment.",
      ),
    );
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(
      GOOGLE_MAPS_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    // The script may have been inserted and loaded between the
    // initial window.google check and this point.
    if (window.google?.maps) {
      resolve(window.google);
      return;
    }

    if (existingScript) {
      const handleLoad = () => {
        if (window.google?.maps) {
          resolve(window.google);
        } else {
          googleMapsPromise = null;
          reject(
            new Error(
              "Google Maps script loaded, but window.google.maps is unavailable.",
            ),
          );
        }
      };

      const handleError = () => {
        googleMapsPromise = null;
        reject(new Error("Failed to load Google Maps script."));
      };

      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });

      return;
    }

    const script = document.createElement("script");

    script.id = GOOGLE_MAPS_SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";

    const params = new URLSearchParams({
      key: API_KEY,
      v: "weekly",
      libraries: "marker,places,geocoding,geometry",
    });

    script.src = `${MAPS_PROXY_URL}/maps/api/js?${params}`;

    script.onload = () => {
      if (window.google?.maps) {
        resolve(window.google);
      } else {
        googleMapsPromise = null;
        reject(
          new Error(
            "Google Maps script loaded, but window.google.maps is unavailable.",
          ),
        );
      }
    };

    script.onerror = () => {
      googleMapsPromise = null;
      reject(new Error("Failed to load Google Maps script."));
    };

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  mapId?: string;
  onMapReady?: (map: google.maps.Map) => void;
}

export function MapView({
  className,
  initialCenter = {
    lat: 37.7749,
    lng: -122.4194,
  },
  initialZoom = 12,
  mapId,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const onMapReadyRef = usePersistFn((map: google.maps.Map) => {
    onMapReady?.(map);
  });

  useEffect(() => {
    let cancelled = false;

    const initializeMap = async () => {
      try {
        const google = await loadGoogleMaps();

        if (cancelled) {
          return;
        }

        const container = mapContainer.current;

        if (!container) {
          console.error("Google Maps container was not found.");
          return;
        }

        if (mapRef.current) {
          return;
        }

        const map = new google.maps.Map(container, {
          center: initialCenter,
          zoom: initialZoom,

          mapTypeControl: true,
          fullscreenControl: true,
          zoomControl: true,
          streetViewControl: true,

          ...(mapId ? { mapId } : {}),
        });

        if (cancelled) {
          return;
        }

        mapRef.current = map;
        onMapReadyRef?.(map);
      } catch (error) {
        if (!cancelled) {
          console.error(
            "Failed to initialize Google Maps:",
            error,
          );
        }
      }
    };

    initializeMap();

    return () => {
      cancelled = true;
    };
  }, [initialCenter, initialZoom, onMapReadyRef, mapId]);

  return (
    <div
      ref={mapContainer}
      className={cn("w-full h-[500px]", className)}
    />
  );
}
