import { InjectionToken } from '@angular/core';

export interface SharedOptions {
	production: boolean;
}

export const SHARED_OPTIONS = new InjectionToken<SharedOptions>('shared-options');
