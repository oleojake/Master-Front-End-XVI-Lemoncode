import React from "react";
import { Toolbar } from "@mui/material";
import classes from "./toolbar.component.module.scss";

export const ToolbarComponent: React.FC = () => {
	return <Toolbar className={classes.menuContainer}></Toolbar>;
};
