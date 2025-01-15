import { Component } from '@angular/core';
import { LoginFormComponent } from './components/index';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '@model/index';

@Component({
	selector: 'app-login-container',
	standalone: true,
	imports: [LoginFormComponent],
	templateUrl: './login-container.component.html',
	styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

	constructor(private authService: AuthService, private router: Router) { }

	public onLogin(user: User): void {
		if (this.authService.login(user)) {
			this.router.navigate(['/dashboard']);
		} else {
			alert('Invalid user or password');
		}
	}

}
