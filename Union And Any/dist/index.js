"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Union in typescript');
// let views:number|string='1M'
let views = 12;
console.log(views);
let apiStatus = 'pending';
apiStatus = 'success';
console.log(apiStatus);
let airlineSeats = 'middle';
airlineSeats = 'window';
console.log(airlineSeats);
const order = ['1', '2', '3', '4'];
let currentOrder;
for (const val of order) {
    if (val === '3') {
        currentOrder = val;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=index.js.map