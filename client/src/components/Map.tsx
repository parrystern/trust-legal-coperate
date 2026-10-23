import React from "react";
const Map = () => { const address = "85 Newmarket Road, Hawthorpe, PE10 4JB, United Kingdom";
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
return ( <section className="w-full"> <div className="mb-4"> <h2 className="font-serif text-2xl font-bold text-primary"> Find Us </h2>
    <p className="mt-2 text-gray-600">
      85 Newmarket Road, Hawthorpe, PE10 4JB, United Kingdom
    </p>
  </div>

  <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md">
    <iframe
      title="Trust Legal Corporate location"
      src={mapUrl}
      width="100%"
      height="400"
      style={{
        border: 0,
        display: "block",
      }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block rounded-md bg-primary px-5 py-3 text-white transition-colors hover:bg-primary/80"
  >
    Open in Google Maps
  </a>
</section>
); };
export default Map;