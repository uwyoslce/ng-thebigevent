import { UIRouterModule, UIView } from '@uirouter/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { APP_STATES } from './app.states';

import { AppComponent } from './app.component';

import { JobsModule } from './jobs/jobs.module';
import { GroupsModule } from './groups/groups.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		JobsModule,
		GroupsModule,
		UIRouterModule.forRoot({
			states: APP_STATES,
			useHash: false,
			otherwise: {
        state: 'jobs.index'
      }
		})
	],
	providers: [],
	bootstrap: [UIView]
})
export class AppModule {}
