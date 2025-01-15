import { Component } from '@angular/core';
import { LoginFormComponent } from './components/index';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '@model/index';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-login-container',
	standalone: true,
	imports: [LoginFormComponent, MatProgressSpinnerModule, NgIf],
	templateUrl: './login-container.component.html',
	styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

	isLoading = false;

	constructor(private authService: AuthService, private router: Router) { }

	public onLogin(user: User): void {
		this.isLoading = true;
		this.authService.login(user).subscribe(
			(sucess) => {
				this.isLoading = false;
				if (sucess) {
					this.router.navigate(['/dashboard']);
				} else {
					alert('Invalid user or password');
				}
			}
		);
	}

}
