/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IUser } from '../../models';
import { randUser } from '@ngneat/falso';

@Injectable({ providedIn: 'root' })
export class UsersService {
	public getUsers() {
		const users: IUser[] = [];
		for (let i = 0; i < 10; i++) {
			const user = randUser();
			users.push({
				uuid: user.id,
				username: user.username,
				firstname: user.firstName,
				lastname: user.lastName,
				email: user.email,
			});
		}
		return of(users);
	}
}
