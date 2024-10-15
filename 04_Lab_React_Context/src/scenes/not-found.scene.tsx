import { Layout404 } from "@/layout";
import { NotFoundContainer } from "@/pods/not-found";
import React from "react";

export const NotFoundScene: React.FC = () => {
	return (
		<Layout404>
			<NotFoundContainer />
		</Layout404>
	);
};
