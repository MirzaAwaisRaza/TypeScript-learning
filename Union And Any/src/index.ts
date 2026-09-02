console.log('Union in typescript')
// let views:number|string='1M'
let views:number|string=12
console.log(views)

let apiStatus:'success'|'pending'|'error'='pending'
apiStatus='success'
console.log(apiStatus)

let airlineSeats:'middle'|'start'|'window'='middle'
airlineSeats='window'
console.log(airlineSeats)

const order:string[]=['1','2','3','4']
let currentOrder:string|undefined;
for (const val of order) {
    if(val==='3'){
        currentOrder=val
        break;
    }
}

console.log(currentOrder)


