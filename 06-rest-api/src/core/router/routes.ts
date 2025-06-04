import { generatePath } from 'react-router';

interface SwitchRoutes {
	root: string;
	hotelCollection: string;
	createHotel: string;
	editHotel: string;
	characterCollection: string;
	editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
	root: '/',
	hotelCollection: '/hotels',
	createHotel: '/hotels/create',
	editHotel: '/hotels/:id',
	characterCollection: '/characters',
	editCharacter: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel' | 'editCharacter'> {
	editHotel: NavigationFunction;
	editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
	...switchRoutes,
	editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
	editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
