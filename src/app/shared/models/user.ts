import { IUser } from './interfaces/iuser';

export class User implements IUser {
    id: number;    
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
