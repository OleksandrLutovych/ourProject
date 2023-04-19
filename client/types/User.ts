export interface IUser {
    name: string,
    lastName: string,
    email: string,
    password: string
}

export interface IInitialStateUser {
      users: IUser[];
      loading: boolean;
      error: boolean;
    }