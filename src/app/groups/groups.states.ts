import { Ng2StateDeclaration } from '@uirouter/angular';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

export const groupsHome: Ng2StateDeclaration = {
	parent: 'app',
	name: 'groups',
	url: '/groups',
	component: HomeComponent
};

export const groupsIndex: Ng2StateDeclaration = {
	name: 'groups.index',
	url: '/index',
	component: IndexComponent
};

export const GROUPS_STATES = [groupsHome, groupsIndex];
