import { generatePath } from 'react-router';

interface SwitchRoutes {
	root: string;
	characterCollection: string;
	editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
	root: '/',
	characterCollection: '/characters',
	editCharacter: '/characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
	editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
	...switchRoutes,
	editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
