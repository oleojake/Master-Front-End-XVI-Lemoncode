import React from "react";
import {
	Alert,
	Box,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./searchbar.component.module.scss";

interface SearchBarComponentProps {
	inputRef: React.RefObject<HTMLInputElement>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: string | null;
	placeholder?: string;
}

export const SearchBarComponent: React.FC<SearchBarComponentProps> = (
	props
) => {
	const { inputRef: companyInputRef, handleSubmit, error, placeholder } = props;

	return (
		<Box className={classes.container}>
			<form onSubmit={handleSubmit}>
				<TextField
					className={classes.searchBar}
					inputRef={companyInputRef}
					label={placeholder ? placeholder : "Search..."}
					variant="outlined"
					size="small"
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										style={{ backgroundColor: "transparent" }}
										disableRipple
										type="submit"
									>
										<SearchIcon fontSize="medium" />
									</IconButton>
								</InputAdornment>
							),
						},
					}}
				/>
			</form>
			{error && (
				<Alert className={classes.error} severity="error">
					{error}
				</Alert>
			)}
		</Box>
	);
};
