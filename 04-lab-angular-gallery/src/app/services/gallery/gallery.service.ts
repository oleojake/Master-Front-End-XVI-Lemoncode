import { Injectable } from '@angular/core';
import { GalleryImage } from '@model/index';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GalleryService {

	galleryItems: GalleryImage[] = [
		{
			id: 1,
			path: '/gallery-images/landscape-1.jpg',
			title: 'Image 1'
		},
		{
			id: 2,
			path: '/gallery-images/landscape-2.jpg',
			title: 'Image 2'
		},
		{
			id: 3,
			path: '/gallery-images/landscape-3.jpg',
			title: 'Image 3'
		},
		{
			id: 4,
			path: '/gallery-images/landscape-4.jpg',
			title: 'Image 4'
		},
		{
			id: 5,
			path: '/gallery-images/landscape-5.jpg',
			title: 'Image 5'
		},
		{
			id: 6,
			path: '/gallery-images/landscape-6.jpg',
			title: 'Image 6'
		},
		{
			id: 7,
			path: '/gallery-images/landscape-7.jpg',
			title: 'Image 7'
		},
		{
			id: 8,
			path: '/gallery-images/landscape-8.jpg',
			title: 'Image 8'
		}
	]

	constructor() { }

	getGalleryImages(): Observable<GalleryImage[]> {
		return of(this.galleryItems);
	}
}
