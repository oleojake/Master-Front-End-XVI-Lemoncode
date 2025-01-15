import { Component } from '@angular/core';
import { AppLayoutComponent } from "../../layout/app-layout/app-layout.component";
import { RotateContainerComponent } from "../../pods/rotate-container/rotate-container.component";

@Component({
	selector: 'app-rotate-scene',
	standalone: true,
	imports: [AppLayoutComponent, RotateContainerComponent],
	templateUrl: './rotate-scene.component.html',
	styleUrl: './rotate-scene.component.scss'
})
export class RotateSceneComponent {

}
