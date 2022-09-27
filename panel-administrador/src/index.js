import React from "react";
import ReactDom from "react-dom/client";
import AppAdmin from "./AppAdmin";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppAdmin />
	</React.StrictMode>
);
