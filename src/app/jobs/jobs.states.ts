import { MapComponent } from './map/map.component';
import { NewComponent } from './../groups/new/new.component';
import { JobsComponent } from './jobs/jobs.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

// jobs
export const jobsState: Ng2StateDeclaration = {
	parent: 'app',
	name: 'jobs',
	url: '/jobs',
	redirectTo: {
		state: 'jobs.index'
	},
	component: JobsComponent
};

export const jobsIndexState: Ng2StateDeclaration = {
	name: 'jobs.index',
	url: '/index',
	component: IndexComponent
};

export const jobsMapState: Ng2StateDeclaration = {
	name: 'jobs.map',
	url: '/map',
	component: MapComponent
};

export const jobsNewState: Ng2StateDeclaration = {
	name: 'jobs.new',
	url: '/new',
	component: NewComponent
};

export const jobViewState: Ng2StateDeclaration = {
	name: 'jobs.job',
	url: '/{job_id:int}',
	component: ViewComponent
};

export const jobEditState: Ng2StateDeclaration = {
	name: 'jobs.job.edit',
	url: '/edit',
	component: EditComponent
};

export const JOBS_STATES: Ng2StateDeclaration[] = [
	jobsState,
	jobsIndexState,
	jobsMapState,
	jobsNewState,
	jobViewState,
	jobEditState
];
