import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'user-administration',
		loadChildren: () => import('@taiga-ui-playground/user-administration').then((m) => m.UserAdministrationShellModule),
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
