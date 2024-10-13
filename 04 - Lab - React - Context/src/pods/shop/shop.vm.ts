export interface PictureInfo {
	id: string;
	picUrl: string;
	title: string;
	category: categories;
	selected: boolean;
}

export enum categories {
	all = 'all',
	cat = 'cat',
	dog = 'dog',
}