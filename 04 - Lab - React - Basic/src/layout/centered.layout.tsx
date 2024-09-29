import React from "react";
import { PropsWithChildren } from "react";
import classes from "./centered.layout.module.css";

export const CenteredLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={classes.layoutCenter}>
			<h1>My list app</h1>
			{children}
		</div>
	);
};
