import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-private-header',
	standalone: true,
	imports: [RouterLink, MatToolbar, MatIconModule, MatButtonModule],
	templateUrl: './private-header.component.html',
	styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {

	@Input()
	loggedUsername!: string;

	@Output()
	logoutEvent = new EventEmitter<void>();

	onLogout() {
		this.logoutEvent.emit();
	}

}
