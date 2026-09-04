interface chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: chai = {
  flavor: "masala",
  price: 20,
};

interface Shop {
  readonly shopId: string;
  name: string;
}

const newShop: Shop = {
  shopId: "w1234@%#$",
  name: "Sweet&Bakes",
};

interface DiscountCalculator {
  (price: number): number;
}

const shopDiscount: DiscountCalculator = (p) => p * 0.5;

interface Machine {
  start(): void;
  stop(): void;
}

class TeaMachine implements Machine {
  start(): void {
    console.log(`Machine Start`);
  }

  stop(): void {
    console.log(`Machine Stop`);
  }
}

interface chaiRatings {
  [flavor: string]: number;
}

const giveRatings: chaiRatings = {
  masala: 4.5,
};

interface newChaiRatings {
  ratings: [flavor: string, rate: number];
}

const newRatings: newChaiRatings = {
  ratings: ["masala", 4.5],
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const userData: User = {
  name: "ali",
  age: 21,
};


interface A{
    a:number;
}
interface B{
    b:number;
}

interface C extends A,B{c:string}

const mergeDemo:C={
    a:1,
    b:2,
    c:'Hello',
}