import { Component } from '@angular/core';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

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
