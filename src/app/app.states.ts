import { AppComponent } from './app.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const appState = {
	name: 'app',
	url: '',
	redirectTo: '/jobs/index',
	component: AppComponent
};

export const jobsFutureState: Ng2StateDeclaration = {
	parent: 'app',
	name: 'jobs.**',
	url: '/jobs',
	loadChildren: './jobs/jobs.module#JobsModule'
};

export const groupsFutureState: Ng2StateDeclaration = {
	parent: 'app',
	name: 'groups.**',
	url: '/groups',
	loadChildren: './groups/groups.module#GroupsModule'
};

export const APP_STATES: Ng2StateDeclaration[] = [
	appState,
	jobsFutureState,
	groupsFutureState
];
