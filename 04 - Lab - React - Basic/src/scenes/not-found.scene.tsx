import { CenteredLayout } from "@/layout";
import { NotFoundContainer } from "@/pods/not-found";
import React from "react";

export const NotFoundScene: React.FC = () => {
	return (
		<CenteredLayout>
			<NotFoundContainer />
		</CenteredLayout>
	);
};
