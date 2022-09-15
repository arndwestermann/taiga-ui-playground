import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'taiga-ui-playground-playground',
	templateUrl: './playground.component.html',
	styleUrls: ['./playground.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaygroundComponent {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public onClick(event?: any) {
		console.log(event);
	}
}
