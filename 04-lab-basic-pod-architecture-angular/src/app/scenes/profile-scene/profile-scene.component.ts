import { Component } from '@angular/core';
import { AppLayoutComponent } from "../../layout/app-layout/app-layout.component";
import { ProfileContainerComponent } from "../../pods/profile-container/profile-container.component";

@Component({
	selector: 'app-profile-scene',
	standalone: true,
	imports: [AppLayoutComponent, ProfileContainerComponent],
	templateUrl: './profile-scene.component.html',
	styleUrl: './profile-scene.component.scss'
})
export class ProfileSceneComponent {

}
