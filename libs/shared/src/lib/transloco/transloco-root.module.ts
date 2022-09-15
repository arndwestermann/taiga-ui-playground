import { HttpClient } from '@angular/common/http';
import { TRANSLOCO_LOADER, Translation, TranslocoLoader, TRANSLOCO_CONFIG, translocoConfig, TranslocoModule } from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
// import { environment as env } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
	constructor(private http: HttpClient) {}

	getTranslation(lang: string) {
		return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
	}
}

@NgModule({
	exports: [TranslocoModule],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig({
				availableLangs: ['en_GB', 'de_DE'],
				defaultLang: 'en_GB',
				fallbackLang: 'en_GB',
				// Remove this option if your application doesn't support changing language in runtime.
				reRenderOnLangChange: true,
				prodMode: true,
			}),
		},
		{ provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
	],
})
export class TranslocoRootModule {}
