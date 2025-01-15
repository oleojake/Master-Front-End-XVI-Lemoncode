import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from "./components/index";

@Component({
	selector: 'app-app-layout',
	standalone: true,
	imports: [FooterComponent, HeaderComponent],
	templateUrl: './app-layout.component.html',
	styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
