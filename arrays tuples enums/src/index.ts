// Arrays
console.log("Arrays")
const chaiFlavors: string[] = ["greentea", "pinktea"];
const chaiPrice: number[] = [10, 20, 30];

const ratings: Array<number> = [3.5, 4.5, 8];

type chai = {
  name: string;
  price: number;
};

// const menu:readonly chai[]=[
//     {name:"masala chai",price:20},
//     {name:"green chai",price:30},
//     {name:"yellow chai",price:40},
// ]

const menu: Array<chai> = [
  { name: "masala chai", price: 20 },
  { name: "green chai", price: 30 },
  { name: "yellow chai", price: 40 },
];

const cities: readonly string[] = ["Lahore", "Karachi", "Multan"];

const matrx: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// Tuples
// Non-Named Tuples
console.log("Tuples")

let chaiTuple:[string,number]
chaiTuple=["greenTea",20]
chaiTuple=["yellowTea",20]
// chaiTuple=[20,"pinkTea"]  order matter in tuples in the typescript


let UsersInfo:[string,number,string?]
UsersInfo=["ali",20]
UsersInfo=["hamza",10,"male"]
UsersInfo=["ahmad",24,"male"]

// ReadOnly Tuples
let hobbies:readonly [string,number]=["singing",10]


// Named Tuples
let order:[orderID:string,Location:string]
order=["ew123","Lahore"]


// Enums
enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=cupSize.LARGE;

enum Status{
    PENDING=100,
    SERVED, //101
    CANCELLED, //102
}

enum chaiType{
    MASALA='masala',
    GINGER='ginger'
}

function makingChai(type:chaiType):string{
    return `making ${type} chai`
}

makingChai(chaiType.MASALA)

enum random{
    ID=1,
    NAME="ALI"
}

const enum sugarType{
    WHITESUGAR,
    BROWNSUGAR
}

const whichSugar=sugarType.BROWNSUGAR;







