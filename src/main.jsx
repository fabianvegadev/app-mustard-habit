import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Animation/Animation.css";
import App from "./App/App";
import "./index.css";

createRoot(document.getElementById("app")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
