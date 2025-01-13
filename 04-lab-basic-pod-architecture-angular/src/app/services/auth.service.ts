import { Injectable } from '@angular/core';
import { User } from '../model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private user: User = { username: '', password: '' };

	constructor() { }

	public login(user: User): boolean {
		if (user.username === 'master@lemoncode.net' && user.password === '12345678') {
			this.user = user;
			console.log('User logged in');
			console.log(this.user);
			return true;
		} else {
			console.log('User not logged in');
			console.log(this.user);
			return false;
		}
	}

	public logout(): void {
		this.user = { username: '', password: '' };
		console.log('User logged out');
		console.log(this.user);
	}

	public isLogged(): boolean {
		return this.user.username !== '';
	}

	public getUsename(): string {
		console.log(this.user.username);
		return this.user.username;
	}
}
