import { Injectable } from '@angular/core';
import { User } from '@model/index';
import { delay, Observable, of } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private user: User | null = null;

	constructor() {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			this.user = JSON.parse(storedUser);
		}
	}

	public login(user: User): Observable<boolean> {
		if (user.username === 'master@lemoncode.net' && user.password === '12345678') {
			this.user = user;
			localStorage.setItem('user', JSON.stringify(this.user));
			console.log('User logged in');
			console.log(this.user);
			return of(true).pipe(delay(2000));
		} else {
			console.log('User not logged in');
			console.log(this.user);
			return of(false).pipe(delay(2000));
		}
	}

	public logout(): void {
		this.user = null;
		localStorage.removeItem('user');
		console.log('User logged out');
		console.log(this.user);
	}

	public isLogged(): boolean {
		return this.user !== null;
	}

	public getUsename(): string {
		console.log(this.user?.username);
		return this.user ? this.user.username : '';
	}
}
