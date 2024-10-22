import { enqueueSnackbar } from "notistack";

export const orderConfirmedSnackBar = (id: string) => {
	enqueueSnackbar(`Order #${id} confirmed!`, {
		variant: "success",
		style: { opacity: "90%" },
	});
};