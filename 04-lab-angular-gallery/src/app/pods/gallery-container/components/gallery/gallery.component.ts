import { Component } from '@angular/core';
import { GalleryService } from '../../../../services';
import { GalleryImage } from '../../../../model';
import { NgFor } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


@Component({
	selector: 'app-gallery',
	standalone: true,
	imports: [NgFor, MatProgressBar, MatButton, MatIcon],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

	galleryItems: GalleryImage[];

	constructor(private GalleryService: GalleryService) {
		this.galleryItems = this.GalleryService.getGalleryImages();
	}


}
