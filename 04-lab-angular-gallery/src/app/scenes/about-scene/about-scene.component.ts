import { Component } from '@angular/core';
import { AppLayoutComponent } from "@layout/app-layout/app-layout.component";
import { AboutContainerComponent } from "@pods/about-container/about-container.component";

@Component({
	selector: 'app-about-scene',
	standalone: true,
	imports: [AppLayoutComponent, AboutContainerComponent],
	templateUrl: './about-scene.component.html',
	styleUrl: './about-scene.component.scss'
})
export class AboutSceneComponent {

}
