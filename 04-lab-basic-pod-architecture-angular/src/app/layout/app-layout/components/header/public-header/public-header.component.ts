import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@Component({
	selector: 'app-public-header',
	standalone: true,
	imports: [RouterLink, MatButtonModule, MatToolbar, MatIconModule],
	templateUrl: './public-header.component.html',
	styleUrl: './public-header.component.scss'
})
export class PublicHeaderComponent {

}
