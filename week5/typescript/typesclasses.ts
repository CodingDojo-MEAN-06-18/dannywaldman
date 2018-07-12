let myNum: number = 5;

let myString: string = "Hello Universe";

let myArr: Array<number> = [1, 2, 3, 4];

let myObj: { [key: string]: (string | number) } = { Name: "Bill" };

let anythingVariable: any;

anythingVariable = "Hey";

anythingVariable = 25;

let arrayOne: Array<boolean> = [true, false, true, true];

let arrayTwo: Array<any> = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };



class MyNode {
    _priv: number;
    constructor(val: number) {
        this._priv = val;
    }
    doSomething(): void {
        this._priv = 10;
     }
}



let myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance._priv);

function myFunction(): void{
    console.log("Hello World");
    return;
}

function sendingErrors(): never{
    throw new Error('Error Message');
}
