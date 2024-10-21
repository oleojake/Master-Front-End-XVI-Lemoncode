import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { OrderProvider } from "./provider";
import { SnackbarProvider } from "notistack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";

dayjs.locale("en-gb");
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<SnackbarProvider maxSnack={3} autoHideDuration={1000}>
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
			<OrderProvider>
				<App />
			</OrderProvider>
		</LocalizationProvider>
	</SnackbarProvider>
);
