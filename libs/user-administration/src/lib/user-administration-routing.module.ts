import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAdministrationComponent } from './user-administration.component';

const routes: Routes = [
	{
		path: '',
		component: UserAdministrationComponent, // child route component that the router renders
		data: {
			breadcrumb: 'user-administration',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UserAdministrationRoutingModule {}
