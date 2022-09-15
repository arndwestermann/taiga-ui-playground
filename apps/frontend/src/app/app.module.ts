import { NgModule } from '@angular/core';

import { CoreModule } from '@taiga-ui-playground/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { PlaygroundModule } from './playground/playground.module';

import { SharedModule, SharedOptions } from '@taiga-ui-playground/shared';

import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
// AppRoutingModule
@NgModule({
	declarations: [AppComponent],
	imports: [
		CoreModule,
		SharedModule.forRoot(environment as SharedOptions),
		AppRoutingModule,
		PlaygroundModule,
		TuiRootModule,
		TuiDialogModule,
		TuiAlertModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
