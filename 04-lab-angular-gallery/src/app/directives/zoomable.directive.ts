import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appZoomable]',
	standalone: true,
	exportAs: 'appZoomable'
})
export class ZoomableDirective {

	private scale: number;

	private el: ElementRef;
	constructor(el: ElementRef) {
		this.el = el;
		this.scale = 1.0;
	}

	zoomIn(): void {
		if (this.scale < 1.5) {
			this.scale += 0.1;
			this.applyScale();
		}
	}

	zoomOut(): void {
		if (this.scale >= 1.1) {
			this.scale -= 0.1;
			this.applyScale();
		}
	}

	cannotZoomIn(): boolean {
		return this.scale >= 1.5;
	}

	cannotZoomOut(): boolean {
		return this.scale <= 1;
	}

	private applyScale(): void {
		this.el.nativeElement.style.transform = `scale(${this.scale})`;
	}

	getZoomState(): number {
		return this.scale;
	}

}
