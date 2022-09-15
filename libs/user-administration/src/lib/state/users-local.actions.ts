import { IUser } from '@taiga-ui-playground/shared';

const PREFIX = '[UsersLocal]';
const ACTION_SUCCESS_NAME = 'Success';

export class GetUsers {
	static readonly type = `${PREFIX} Get Users`;
}

export class GetUsersSuccess {
	static readonly type = `${PREFIX} Get Users ${ACTION_SUCCESS_NAME}`;
	constructor(public users: IUser[]) {}
}
