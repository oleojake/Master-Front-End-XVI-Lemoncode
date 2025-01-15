import { Component } from '@angular/core';
import { RotateDirective } from '@directives/rotate/rotate.directive';

@Component({
	selector: 'app-rotate-container',
	standalone: true,
	imports: [RotateDirective],
	templateUrl: './rotate-container.component.html',
	styleUrl: './rotate-container.component.scss'
})
export class RotateContainerComponent {


}
