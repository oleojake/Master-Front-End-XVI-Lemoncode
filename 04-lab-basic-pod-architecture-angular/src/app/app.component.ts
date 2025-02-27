import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeSceneComponent } from './scenes/home-scene/home-scene.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatSlideToggleModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = '04-lab-basic-pod-architecture-angular';
}
