export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite?: string;
    city: string;
    zipcode: string;
    geo: any;
  };
  phone: string;
  website?: string;
  company: any;
}

export interface IInitialStateUser {
  users: IUser[];
  loading: boolean;
  error: boolean;
}
