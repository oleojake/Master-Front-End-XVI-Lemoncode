import { Component } from '@angular/core';
import { GalleryService } from '../../../../services';
import { GalleryImage } from '../../../../model';
import { NgFor, SlicePipe } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ZoomableDirective } from '../../../../directives/zoomable.directive';


@Component({
	selector: 'app-gallery',
	standalone: true,
	imports: [NgFor, MatProgressBar, MatButton, MatIcon, ZoomableDirective, SlicePipe],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

	galleryItems: GalleryImage[];
	selectedImage: GalleryImage;
	selectedImageIndex: number;
	startInterval: any;
	isPlaying: boolean;

	constructor(private GalleryService: GalleryService) {
		this.galleryItems = this.GalleryService.getGalleryImages();
		this.selectedImage = this.galleryItems[0];
		this.selectedImageIndex = 0;
		this.isPlaying = false;
	}

	selectImage(index: number): void {
		this.selectedImage = this.galleryItems[index];
		this.selectedImageIndex = index;
	}

	nextImage(): void {
		if (this.selectedImageIndex < this.galleryItems.length - 1) {
			this.selectedImage = this.galleryItems[this.selectedImageIndex + 1];
			this.selectedImageIndex = this.selectedImageIndex + 1;
		}
	}

	isLastImageSelected(): boolean {
		return this.selectedImageIndex === this.galleryItems.length - 1
	}

	previousImage(): void {
		if (this.selectedImageIndex > 0) {
			this.selectedImage = this.galleryItems[this.selectedImageIndex - 1];
			this.selectedImageIndex = this.selectedImageIndex - 1;
		}
	}

	isFirstImageSelected(): boolean {
		return this.selectedImageIndex === 0
	}

	play(): void {
		this.isPlaying = true;
		this.startInterval = setInterval(() => {
			if (this.selectedImageIndex === this.galleryItems.length - 1) {
				this.selectedImage = this.galleryItems[0];
				this.selectedImageIndex = 0;
			} else {
				this.selectedImage = this.galleryItems[this.selectedImageIndex + 1];
				this.selectedImageIndex = this.selectedImageIndex + 1;
			}
		}, 2000);
	}

	stop(): void {
		this.isPlaying = false;
		clearInterval(this.startInterval);
	}

}
