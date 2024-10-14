import { enqueueSnackbar } from "notistack";

export const openSnackBarProductAdded = (name: string) => {
	enqueueSnackbar(`${name} added!`, {
		variant: "success",
		style: { opacity: "90%" },
	});
};