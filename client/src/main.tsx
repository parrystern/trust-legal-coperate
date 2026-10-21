import { createRoot } from "react-dom/client";
import App from "./App";
// @ts-ignore -- CSS side-effect imports are resolved by the bundler.
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
