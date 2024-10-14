import { categories, PictureInfo } from './shop.vm';
import { v4 as uuidv4 } from 'uuid';

export const mockPictures: PictureInfo[] = [
	{
		id: uuidv4(),
		picUrl: "/images/garfield.jpg",
		title: 'Garfield',
		category: categories.cat,
		selected: true,
	},
	{
		id: uuidv4(),
		picUrl: 'images/tom.jpg',
		title: 'Tom',
		category: categories.cat,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/sylvester.jpg',
		title: 'Sylvester',
		category: categories.cat,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/chesire.jpg',
		title: 'Chesire Cat',
		category: categories.cat,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/snowball-ii.jpg',
		title: 'Snowball II',
		category: categories.cat,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/snoopy.jpg',
		title: 'Snoopy',
		category: categories.dog,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/scooby-doo.jpg',
		title: 'Scooby Doo',
		category: categories.dog,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/brian.jpg',
		title: 'Brian',
		category: categories.dog,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/odie.jpg',
		title: 'Odie',
		category: categories.dog,
		selected: false,
	},
	{
		id: uuidv4(),
		picUrl: 'images/santas-little-helper.jpg',
		title: `Santa's Little Helper`,
		category: categories.dog,
		selected: false,
	},
];


