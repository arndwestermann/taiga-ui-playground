/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUsers } from './state';
import { UsersLocalState } from './state/users-local.state';

@Component({
	selector: 'taiga-ui-playground-user-administration',
	templateUrl: './user-administration.component.html',
	styleUrls: ['./user-administration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAdministrationComponent implements OnInit {
	public readonly columns = ['username', 'firstname', 'lastname', 'email'];
	public readonly pageSizes = [10, 25, 50, 100];

	public users$ = this.store.select(UsersLocalState.users).pipe();
	constructor(private store: Store) {}

	public ngOnInit(): void {
		this.store.dispatch(new GetUsers());
	}
}
