import { Component } from '@angular/core';
import { HomeContainerComponent } from "@pods/home-container/home-container.component";
import { AppLayoutComponent } from "@layout/app-layout/app-layout.component";

@Component({
	selector: 'app-home-scene',
	standalone: true,
	imports: [HomeContainerComponent, AppLayoutComponent],
	templateUrl: './home-scene.component.html',
	styleUrl: './home-scene.component.scss'
})
export class HomeSceneComponent {

}
