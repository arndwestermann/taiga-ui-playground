import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslocoHttpLoader, TranslocoRootModule } from './transloco/transloco-root.module';

import { HotkeysModule } from '@ngneat/hotkeys';
import { SharedOptions, SHARED_OPTIONS } from './shared.options';
import { TUI_LANGUAGE, TUI_GERMAN_LANGUAGE, TUI_ENGLISH_LANGUAGE } from '@taiga-ui/i18n';
import { map } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

@NgModule({
	declarations: [],
	imports: [TranslocoRootModule, HotkeysModule],
	exports: [TranslocoRootModule, HotkeysModule],
	providers: [
		TranslocoHttpLoader,
		{
			provide: TUI_LANGUAGE,
			useFactory: (translocoService: TranslocoService) =>
				translocoService.langChanges$.pipe(
					map((lang) => {
						if (lang === 'en_GB') return TUI_ENGLISH_LANGUAGE;
						else if (lang === 'de_DE') return TUI_GERMAN_LANGUAGE;
						else return TUI_ENGLISH_LANGUAGE;
					})
				),
			deps: [TranslocoService],
		},
	],
})
export class SharedModule {
	public static forRoot(options: SharedOptions): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [
				{
					provide: SHARED_OPTIONS,
					useValue: options,
				},
			],
		};
	}
}
