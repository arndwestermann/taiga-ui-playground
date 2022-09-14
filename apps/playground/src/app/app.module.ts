import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';

const taigaUIModules = [TuiRootModule, TuiDialogModule, TuiAlertModule];

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, ...taigaUIModules],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
