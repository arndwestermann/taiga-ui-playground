import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';

const taigaUIModules = [TuiRootModule, TuiDialogModule, TuiAlertModule];

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ...taigaUIModules],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
