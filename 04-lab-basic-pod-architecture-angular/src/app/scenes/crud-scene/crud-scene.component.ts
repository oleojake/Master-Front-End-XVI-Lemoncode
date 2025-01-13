import { Component } from '@angular/core';
import { AppLayoutComponent } from "../../layout/app-layout/app-layout.component";
import { CrudContainerComponent } from "../../pods/crud-container/crud-container.component";

@Component({
	selector: 'app-crud-scene',
	standalone: true,
	imports: [AppLayoutComponent, CrudContainerComponent],
	templateUrl: './crud-scene.component.html',
	styleUrl: './crud-scene.component.scss'
})
export class CrudSceneComponent {

}
