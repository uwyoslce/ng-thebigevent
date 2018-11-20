import { faHammer, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-jobs-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
	faHammer = faHammer;
	faMapMarkedAlt = faMapMarkedAlt;
	constructor() {}

	ngOnInit() {}
}
