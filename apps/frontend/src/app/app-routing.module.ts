import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
	{
		path: 'user-administration',
		loadChildren: () => import('@taiga-ui-playground/user-administration').then((m) => m.UserAdministrationModule),
	},
	{
		path: 'playground',
		component: PlaygroundComponent,
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
