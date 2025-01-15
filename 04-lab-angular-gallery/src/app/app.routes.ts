import { Routes } from '@angular/router';
import { HomeSceneComponent, AboutSceneComponent, LoginSceneComponent, DashboardSceneComponent, GallerySceneComponent, CrudSceneComponent, ProfileSceneComponent, RotateSceneComponent } from './scenes/';

export const routes: Routes = [
	{ path: '', component: HomeSceneComponent },
	{ path: 'login', component: LoginSceneComponent },
	{ path: 'about', component: AboutSceneComponent },
	{ path: 'dashboard', component: DashboardSceneComponent },
	{ path: 'gallery', component: GallerySceneComponent },
	{ path: 'crud', component: CrudSceneComponent },
	{ path: 'profile', component: ProfileSceneComponent },
	{ path: 'rotate', component: RotateSceneComponent }
];
