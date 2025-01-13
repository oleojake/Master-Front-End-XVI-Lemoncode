import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
	selector: 'app-app-layout',
	standalone: true,
	imports: [FooterComponent, HeaderComponent],
	templateUrl: './app-layout.component.html',
	styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}
