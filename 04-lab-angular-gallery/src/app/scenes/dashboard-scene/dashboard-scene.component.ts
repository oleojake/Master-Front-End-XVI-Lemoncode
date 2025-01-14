import { Component } from '@angular/core';
import { AppLayoutComponent } from "../../layout/app-layout/app-layout.component";
import { DashboardContainerComponent } from "../../pods/dashboard-container/dashboard-container.component";

@Component({
	selector: 'app-dashboard-scene',
	standalone: true,
	imports: [AppLayoutComponent, DashboardContainerComponent],
	templateUrl: './dashboard-scene.component.html',
	styleUrl: './dashboard-scene.component.scss'
})
export class DashboardSceneComponent {

}
