import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'taiga-ui-playground-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
