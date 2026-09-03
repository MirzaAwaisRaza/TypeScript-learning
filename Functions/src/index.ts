console.log("These are typeScript Functions");

function getPrice(): number {
  return 23;
}

function makeOrder(order: string): string | null {
  if (!order) return null;
  return order;
}

function makeChai(type: string, quantity: number): string {
  return `Make ${type} cups of ${quantity}`;
}

function animal(fly?: boolean): void {
  console.log(`Every animal can't fly`);
}

type basicChai = {
  price: number;
  name: string;
  quantity: number;
};

function orderChai(order:basicChai): string {
  return `Order will serve in 2 minutes`;
}

// function orderChai(order: {
//   price: number;
//   name: string;
//   quantity: number;
// }): string {
//   return `Order will serve in 2 minutes`;
// }
