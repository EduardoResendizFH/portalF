export class Usuario{
    constructor(
    public createdAt: Date,
    public email: string, 
    public username: string,
    public password?: string,
    public roles?: string,
    public _id?: string,
    public updatedAt?: Date
    ){}
   

}