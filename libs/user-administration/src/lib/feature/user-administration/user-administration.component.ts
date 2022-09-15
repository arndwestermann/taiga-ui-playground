import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { randUser } from '@ngneat/falso';

interface IUser {
	id: string;
	username: string;
	firstname: string;
	lastname: string;
	email: string;
}

@Component({
	selector: 'taiga-ui-playground-user-administration',
	templateUrl: './user-administration.component.html',
	styleUrls: ['./user-administration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAdministrationComponent implements OnInit {
	public readonly columns = ['username', 'firstname', 'lastname', 'email'];
	private usersSubject = new BehaviorSubject<IUser[]>([]);
	public users$ = this.usersSubject.asObservable();

	ngOnInit(): void {
		const users: IUser[] = [];
		for (let i = 0; i < 10; i++) {
			const user = randUser();
			users.push({
				id: user.id,
				username: user.username,
				firstname: user.firstName,
				lastname: user.lastName,
				email: user.email,
			});
		}

		this.usersSubject.next(users);
	}
}
