import { Component } from '@angular/core';
import { AppLayoutComponent } from "../../layout/app-layout/app-layout.component";
import { GalleryContainerComponent } from "../../pods/gallery-container/gallery-container.component";

@Component({
	selector: 'app-gallery-scene',
	standalone: true,
	imports: [AppLayoutComponent, GalleryContainerComponent],
	templateUrl: './gallery-scene.component.html',
	styleUrl: './gallery-scene.component.scss'
})
export class GallerySceneComponent {

}
