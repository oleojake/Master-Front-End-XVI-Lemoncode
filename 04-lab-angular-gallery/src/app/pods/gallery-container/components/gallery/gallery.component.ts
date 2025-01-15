import { Component } from '@angular/core';
import { GalleryService } from '../../../../services';
import { GalleryImage } from '../../../../model';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ZoomableDirective } from '../../../../directives/zoomable.directive';
import { HighlightThumbnailDirective } from '../../../../directives/highlight-thumbnail.directive';


@Component({
	selector: 'app-gallery',
	standalone: true,
	imports: [NgFor, MatProgressBar, MatButton, MatIcon, ZoomableDirective, HighlightThumbnailDirective, SlicePipe, NgIf],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

	readonly ITEMS_PER_PAGE = 3;
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

	isSelected(index: number): boolean {
		return this.selectedImageIndex === index;
	}

	calculateSlicePipeStart(): number {
		const pageIndex = Math.floor(this.selectedImageIndex / this.ITEMS_PER_PAGE);
		return pageIndex * this.ITEMS_PER_PAGE;
	}

	calculateSlicePipeEnd(): number {
		return this.calculateSlicePipeStart() + this.ITEMS_PER_PAGE;
	}

	nextPage(): void {
		const currentPage = Math.floor(this.selectedImageIndex / this.ITEMS_PER_PAGE);
		const nextPageStart = (currentPage + 1) * this.ITEMS_PER_PAGE;

		if (nextPageStart < this.galleryItems.length) {
			this.selectImage(nextPageStart);
		}
	}

	previousPage(): void {
		const currentPage = Math.floor(this.selectedImageIndex / this.ITEMS_PER_PAGE);
		const previousPageStart = (currentPage - 1) * this.ITEMS_PER_PAGE;

		if (previousPageStart >= 0) {
			this.selectImage(previousPageStart);
		}
	}

	getPageNumber(): number {
		return Math.floor(this.selectedImageIndex / this.ITEMS_PER_PAGE) + 1;
	}

	getTotalPages(): number {
		return Math.ceil(this.galleryItems.length / this.ITEMS_PER_PAGE);
	}
}
