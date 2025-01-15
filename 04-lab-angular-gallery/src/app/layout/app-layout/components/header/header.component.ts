import { Component } from '@angular/core';
import { PublicHeaderComponent, PrivateHeaderComponent } from './components/index';
import { NgIf } from '@angular/common';
import { AuthService } from '@services/auth/auth.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [PublicHeaderComponent, PrivateHeaderComponent, NgIf],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

	loggedIn: boolean;
	loggedUsername: string;

	constructor(private authService: AuthService) {
		this.loggedIn = this.authService.isLogged();
		this.loggedUsername = this.authService.getUsename();
	}

	logout() {
		this.authService.logout();
		this.loggedIn = this.authService.isLogged();
	}

}
