console.log("Welcome to the typescript objects");

// let tea:{
//     name:string,
//     price:number,
//     isHot:boolean
// }

// tea={
//     name:'masla chai',
//     price:20,
//     isHot:true
// }

type tea = {
  name: string;
  price: number;
  isHot: boolean;
};

const chai: tea = {
  name: "masla chai",
  price: 20,
  isHot: true,
};

type cupSize = {
  size: string;
};

const bigCup = { size: "big", message: "make strong tea" };
const smallCup: cupSize = bigCup;

type User = {
  username: string;
  password: String;
};

let user1: User = {
  username: "ali",
  password: "ali@123",
};

type Item = {
  quantity: number;
  name: string;
};

type Address = {
  city: string;
};

type Order = {
  orderId: string;
  items: Item[];
  address: Address;
};

const PlaceOrder: Order = {
  orderId: "r2345@$&",
  items: [
    { quantity: 1, name: "xbox" },
    { quantity: 2, name: "ps5" },
  ],
  address: { city: "Lahore" },
};

// type Order=Item & Address

// const PlaceOrder:Order={
//     quantity:1,
//     name:'xbox',
//     country:'pakistan',
//     city:'lahore',
//     street:'123,okara'
// }

type Chai = {
  name: string;
  isHot: boolean;
};

const giveMeChai = (updates: Partial<Chai>) => {
  console.log(updates);
};

giveMeChai({ name: "masalaChai" });
giveMeChai({ isHot: true });
giveMeChai({});

type chaiOrder = {
  name?: string;
  quantity?: number;
};

const serveChai = (order: Required<chaiOrder>) => {
  console.log(order);
};

serveChai({ name: "greentea", quantity: 3 });

type chaiInfo = {
  name: string;
  quantity: number;
  price: number;
  ishot: boolean;
};

type basicChaiInfo = Pick<chaiInfo, "name" | "price">;

const chaiData: basicChaiInfo = {
  name: "pinkTea",
  price: 20,
};

type newChai = {
  name: string;
  price: number;
  quantity: number;
  ishot: boolean;
  secretIngredients: string;
};

type publicChai = Omit<newChai, "secretIngredients">;

const makeTea: publicChai = {
  name: "greenTea",
  price: 20,
  quantity: 2,
  ishot: true,
};
