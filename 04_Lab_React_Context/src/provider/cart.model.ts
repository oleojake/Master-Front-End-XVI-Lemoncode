import { categories, PictureInfo } from "@/pods/shop/shop.vm";

export interface CartContextModel {
	open: boolean;
	handleDrawerOpen: () => void;
	handleDrawerClose: () => void;
	pictures: PictureInfo[];
	handleSelectPicture: (string) => void;
	selectedPictures: PictureInfo[];
	filter: categories;
	handleFilterChange: (categories) => void;
	emptyAllCart: () => void;
}