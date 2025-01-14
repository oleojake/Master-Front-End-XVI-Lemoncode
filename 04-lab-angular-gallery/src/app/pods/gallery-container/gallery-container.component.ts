import { Component } from '@angular/core';
import { GalleryComponent } from "./components/gallery/gallery.component";

@Component({
	selector: 'app-gallery-container',
	standalone: true,
	imports: [GalleryComponent],
	templateUrl: './gallery-container.component.html',
	styleUrl: './gallery-container.component.scss'
})
export class GalleryContainerComponent {

}
