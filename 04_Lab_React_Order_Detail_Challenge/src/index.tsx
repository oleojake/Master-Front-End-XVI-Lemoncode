import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { OrderProvider } from "./provider";
import { SnackbarProvider } from "notistack";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<SnackbarProvider maxSnack={3} autoHideDuration={1000}>
		<OrderProvider>
			<App />
		</OrderProvider>
	</SnackbarProvider>
);
