console.log("Welcome to typeScript");

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `chai Order ${kind}`;
}

function serve(msg?: string) {
  if (msg) {
    return `serve this type of ${msg}`;
  }
  return `serve default chai`;
}


function orderChai(size:'small'|'medium'|'large'|number){
    if(size==='small'){
        return `${size} chai`
    }
    if(size==='medium'){
        return `${size} chai`
    }
    if(size==='large'){
        return `${size} chai`
    }

    return `order: ${size}`
}

class KhuladChai{
    serve(){
        return `serve khulad Chai`
    }
}

class cuttingchai{
    serve(){
        return `serve cutting chai`
    }
}

function serveChai(chai:KhuladChai|cuttingchai){
    if(chai instanceof KhuladChai){
        return chai.serve()
    }
    return chai.serve()
}


let kc=new KhuladChai()
// console.log(kc.serve())
let cc=new cuttingchai()
// console.log(cc.serve())

console.log(serveChai(cc))


// Define custom Types

type chaiOrder={
    type:string,
    sugar:string,
    // sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj ==='object'&&
        obj!=null&&
        typeof obj.type==='string'&&
        typeof obj.sugar==='string'
        // typeof obj.sugar===number
    )
}

function serveOrder(item:chaiOrder|string){
    if(isChaiOrder(item)){
        console.log(`Validation successful`)
        return `Serve ${item.type} with sugar ${item.sugar}`
    }
    return `Serve ${item}`
}

let chai={
    type:"cutting chai",
    sugar:"1 tea spoon"
}
let anotherChai="Khulad Chai"

console.log(serveOrder(chai))

type masalaChai={type:"masalaChai",spicelevel:number}
type gingerChai={type:"gingerChai",sugar:string}
type kasmiriChai={type:"kasmiriChai",color:string}

type chai=masalaChai|gingerChai|kasmiriChai;

function makeAndServeChai(item:chai){
    switch (item.type) {
        case 'masalaChai':
            return `Serve ${item.type}`
            break;
        case 'gingerChai':
            return `Serve ${item.type}`
            break;
        case 'kasmiriChai':
            return `Serve ${item.type}`
            break;
    
        default:
            return `Give any type of chai`
            break;
    }
}


function brew(item:masalaChai|gingerChai){
    if('sugar' in item){
        return item;
    }
}



