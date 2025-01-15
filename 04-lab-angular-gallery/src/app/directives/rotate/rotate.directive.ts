import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appRotate]',
	standalone: true,
	exportAs: 'appRotate'
})
export class RotateDirective implements OnChanges {
	@Input('appRotate') initialRotation!: string;
	@Input('step') degrees!: string;
	private initialRotationDefault: string = '0';
	private degreesDefault: string = '10';
	private currentRotation: number = 0;

	constructor(private el: ElementRef) { }

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['initialRotation']) {
			this.currentRotation = parseInt(this.initialRotation) || parseInt(this.initialRotationDefault);
			this.updateRotation();
		}
		if (changes['degrees']) {
			this.degrees = changes['degrees'].currentValue || this.degreesDefault;
		}
	}

	@HostListener('click', ['$event'])
	handleClick(event: MouseEvent): void {
		if (event.shiftKey) {
			this.rotateLeft();
		} else {
			this.rotateRight();
		}
	}

	private rotateRight(): void {
		this.currentRotation += parseFloat(this.degrees);
		this.updateRotation();
	}

	private rotateLeft(): void {
		this.currentRotation -= parseFloat(this.degrees);
		this.updateRotation();
	}

	private updateRotation(): void {
		this.el.nativeElement.style.transform = `rotate(${this.currentRotation}deg)`;
	}

	getActualRotation(): string {
		return this.currentRotation.toString();
	}

	getRotationStep(): string {
		return this.degrees;
	}
}
