import { CenteredLayout } from "@/layout";
import { ListContainer } from "@/pods/list/list.container";
import React from "react";

export const ListScene: React.FC = () => {
	return (
		<CenteredLayout>
			<ListContainer />
		</CenteredLayout>
	);
};
