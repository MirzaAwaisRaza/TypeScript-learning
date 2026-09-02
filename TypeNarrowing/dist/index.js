"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to typeScript");
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai`;
    }
    return `chai Order ${kind}`;
}
function serve(msg) {
    if (msg) {
        return `serve this type of ${msg}`;
    }
    return `serve default chai`;
}
function orderChai(size) {
    if (size === 'small') {
        return `${size} chai`;
    }
    if (size === 'medium') {
        return `${size} chai`;
    }
    if (size === 'large') {
        return `${size} chai`;
    }
    return `order: ${size}`;
}
class KhuladChai {
    serve() {
        return `serve khulad Chai`;
    }
}
class cuttingchai {
    serve() {
        return `serve cutting chai`;
    }
}
function serveChai(chai) {
    if (chai instanceof KhuladChai) {
        return chai.serve();
    }
    return chai.serve();
}
let kc = new KhuladChai();
// console.log(kc.serve())
let cc = new cuttingchai();
// console.log(cc.serve())
console.log(serveChai(cc));
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj != null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'string');
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        console.log(`Validation successful`);
        return `Serve ${item.type} with sugar ${item.sugar}`;
    }
    return `Validation not successful`;
}
let chai = {
    type: "cutting chai",
    sugar: "1 tea spoon"
};
let anotherChai = "this is a chai";
console.log(serveOrder(chai));
//# sourceMappingURL=index.js.map