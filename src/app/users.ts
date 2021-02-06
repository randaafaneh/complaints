
export class Users {
    public id: number;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    
    constructor(id:number,firstName: string,lastName:string,password:string,email:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    }
    }