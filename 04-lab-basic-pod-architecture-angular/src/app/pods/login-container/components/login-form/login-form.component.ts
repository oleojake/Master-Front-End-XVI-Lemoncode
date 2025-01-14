import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { User } from '../../../../model';
import { NgIf } from '@angular/common';



@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, MatButton, NgIf],
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

	userSubmitted: User = { username: '', password: '' };

	constructor() { }

	@Output()
	public submitLogin: EventEmitter<User> = new EventEmitter<User>();

	public onFormSubmit(): void {
		this.submitLogin.emit(this.userSubmitted);
	}

}
