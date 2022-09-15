import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IUser, UsersService } from '@taiga-ui-playground/shared';
import { tap } from 'rxjs';
import { GetUsers, GetUsersSuccess } from './users-local.actions';

export class UsersLocalStateModel {
	users: IUser[];
}

export const INITIAL_USERS_LOCAL_STATE: UsersLocalStateModel = {
	users: [],
};
@State<UsersLocalStateModel>({
	name: 'usersLocal',
	defaults: INITIAL_USERS_LOCAL_STATE,
})
@Injectable()
export class UsersLocalState {
	constructor(private usersService: UsersService) {}

	@Selector()
	static users(state: UsersLocalStateModel): IUser[] {
		return state.users;
	}
	@Action(GetUsers)
	getUsers({ dispatch }: StateContext<UsersLocalStateModel>) {
		return this.usersService.getUsers().pipe(tap((users) => dispatch(new GetUsersSuccess(users))));
	}

	@Action(GetUsersSuccess)
	getUsersSuccess({ patchState }: StateContext<UsersLocalStateModel>, { users }: GetUsersSuccess) {
		patchState({ users });
	}
}
