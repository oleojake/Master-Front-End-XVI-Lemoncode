import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
	selector: '[appHighlightThumbnail]',
	standalone: true
})
export class HighlightThumbnailDirective implements OnChanges {

	@Input('appHighlightThumbnail') isSelected: boolean = false;

	constructor(private el: ElementRef) { }

	ngOnChanges(): void {
		if (this.isSelected) {
			this.el.nativeElement.classList.add('highlight');
		} else {
			this.el.nativeElement.classList.remove('highlight');
		}
	}

}
