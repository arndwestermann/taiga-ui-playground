import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import localeEnGB from '@angular/common/locales/en-GB';
import localeDeDE from '@angular/common/locales/de';
import { translocoMarkupRouterLinkRenderer } from 'ngx-transloco-markup-router-link';
import { defaultTranslocoMarkupTranspilers } from 'ngx-transloco-markup';

import { SharedModule } from '@taiga-ui-playground/shared';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UsersLocalState } from '@taiga-ui-playground/user-administration';
registerLocaleData(localeEnGB, 'en-GB');
registerLocaleData(localeDeDE, 'de-DE');

@NgModule({
	imports: [
		HttpClientModule,
		SharedModule,
		BrowserModule,
		BrowserAnimationsModule,
		NgxsModule.forRoot([UsersLocalState], {
			developmentMode: true,
		}),
		NgxsReduxDevtoolsPluginModule.forRoot({
			name: 'NGXS store',
			disabled: false,
		}),
		NgxsLoggerPluginModule.forRoot({ disabled: true }),
	],
	declarations: [],
	exports: [BrowserAnimationsModule],
	providers: [translocoMarkupRouterLinkRenderer(), defaultTranslocoMarkupTranspilers()],
})
export class CoreModule {}
