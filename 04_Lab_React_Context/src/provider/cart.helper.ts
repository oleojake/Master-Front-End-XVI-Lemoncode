import { PictureInfo } from "@/pods/shop/shop.vm";

export const findPicture = (id: string, pictureList: PictureInfo[]) => {
	return pictureList.find((picture) => picture.id === id);
};

export const findPicturesSelected = (pictureList: PictureInfo[]) => {
	return pictureList.filter((picture) => picture.selected);
}