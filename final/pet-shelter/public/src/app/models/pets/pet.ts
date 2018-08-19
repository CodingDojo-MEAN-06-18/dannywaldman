export class Pet {
  constructor(
    public _id: string = '',
    public name: string = '',
    public description = '',
    public type: string = '',
    public skills: Array<string> = []
  ) {}
}

