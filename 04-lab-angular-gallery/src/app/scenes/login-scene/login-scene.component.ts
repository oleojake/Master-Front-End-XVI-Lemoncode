import { Component } from '@angular/core';
import { LoginContainerComponent } from "@pods/login-container/login-container.component";
import { AppLayoutComponent } from "@layout/app-layout/app-layout.component";

@Component({
	selector: 'app-login-scene',
	standalone: true,
	imports: [LoginContainerComponent, AppLayoutComponent],
	templateUrl: './login-scene.component.html',
	styleUrl: './login-scene.component.scss'
})
export class LoginSceneComponent {

}
