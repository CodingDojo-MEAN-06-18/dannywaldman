export class User {
  constructor(
    public first : string = '',
    public last : string = '',
    public email : string = '',
    public password : string = '',
    public address : string = '',
    public unit : string = '',
    public city : string = '',
    public state : string = '',
    public lucky : boolean = null,
    public confirm_pw : string = ''
  ){}
}
