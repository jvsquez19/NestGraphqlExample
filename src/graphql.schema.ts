export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    age: string;
    locationId: number;
    bio: string;
}

// tslint:disable-next-line:max-classes-per-file
export abstract class IQuery {
    abstract user(id: string): User | Promise<User>;
}
