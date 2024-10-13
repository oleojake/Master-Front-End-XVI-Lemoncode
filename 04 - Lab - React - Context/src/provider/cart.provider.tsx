import React from "react";
import { PropsWithChildren } from "react";
import { CartContext } from "./cart.context";
import { categories, PictureInfo } from "@/pods/shop/shop.vm";
import { mockPictures } from "@/pods/shop/mock-products";
import { findPicture, findPicturesSelected } from "./cart.helper";

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [open, setOpen] = React.useState(true);
	const [pictures, setPictures] = React.useState<PictureInfo[]>(mockPictures);
	const [selectedPictures, setSelectedPictures] = React.useState<PictureInfo[]>(
		findPicturesSelected(pictures)
	);
	const [filter, setFilter] = React.useState<categories>(categories.all);

	const handleFilterChange = (category: categories) => {
		setFilter(category);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const togglePictureSelection = (id: string) => {
		const picture = findPicture(id, pictures);
		if (picture) {
			const updatedPictures = pictures.map((p) =>
				p.id === id ? { ...p, selected: !p.selected } : p
			);
			setPictures(updatedPictures);
			updateCart(picture);
		}
	};

	const updateCart = (picture: PictureInfo) => {
		const isPictureInCart = findPicture(picture.id, selectedPictures);
		if (isPictureInCart) {
			const updatedCart = selectedPictures.filter((p) => p.id !== picture.id);
			setSelectedPictures(updatedCart);
		} else {
			setSelectedPictures([...selectedPictures, picture]);
		}
	};

	return (
		<CartContext.Provider
			value={{
				open: open,
				handleDrawerOpen: handleDrawerOpen,
				handleDrawerClose: handleDrawerClose,
				pictures: pictures,
				handleSelectPicture: togglePictureSelection,
				selectedPictures: selectedPictures,
				filter: filter,
				handleFilterChange: handleFilterChange,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
