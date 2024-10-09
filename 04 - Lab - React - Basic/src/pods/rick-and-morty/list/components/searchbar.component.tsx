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
	error: string | null;
	placeholder?: string;
	setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBarComponent: React.FC<SearchBarComponentProps> = (
	props
) => {
	const { inputRef: companyInputRef, error, placeholder, setFilter } = props;

	return (
		<Box className={classes.container}>
			<TextField
				className={classes.searchBar}
				inputRef={companyInputRef}
				onChange={(e) => {
					setFilter && setFilter(e.target.value);
				}}
				label={placeholder ? placeholder : "Search..."}
				variant="outlined"
				size="small"
			/>

			{error && (
				<Alert className={classes.error} severity="error">
					{error}
				</Alert>
			)}
		</Box>
	);
};
