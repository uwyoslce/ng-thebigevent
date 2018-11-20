import { Component } from '@angular/core';

import { faHammer, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-the-big-event',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ng-thebigevent';
	faHammer = faHammer;
	faGroup = faUsers;
}
