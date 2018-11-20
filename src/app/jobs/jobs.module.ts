import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UIRouterModule } from '@uirouter/angular';

import { NewComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { EditComponent } from './edit/edit.component';

import { JOBS_STATES } from './jobs.states';
import { JobsComponent } from './jobs/jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

@NgModule({
	declarations: [
		NewComponent,
		IndexComponent,
		ViewComponent,
		MainComponent,
		MapComponent,
		EditComponent,
		JobsComponent,
		JobsListComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		UIRouterModule.forChild({ states: JOBS_STATES })
	]
})
export class JobsModule {}
