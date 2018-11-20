import { GROUPS_STATES } from './groups.states';
import { UIRouterModule } from '@uirouter/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { JoinComponent } from './join/join.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [NewComponent, JoinComponent, IndexComponent, ViewComponent, HomeComponent],
	imports: [
		CommonModule,
		UIRouterModule.forChild({
			states: GROUPS_STATES
		})
	]
})
export class GroupsModule {}
