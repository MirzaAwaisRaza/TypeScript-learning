type chai={
    type:string,
    sugar:string,
    strong:boolean
}


function isChai(order:chai):boolean{
    return(
        typeof order ==="object"&&
        order!=null&&
        typeof order.strong==="boolean"&&
        typeof order.type==="string"&&
        typeof order.sugar==="string"

    )
}

// function makeChai(order:{type:string,sugar:string,strong:boolean}):void{
//     if(isChai(order)){
//     console.log(`${order.type} is making`)
//     return;
//     }
// }

// function serveChai(order:{type:string,sugar:string,strong:boolean}):string{
//     return `${order.type} is ready to serve`
// }

function makeChai(order:chai):void{
    if(isChai(order)){
    console.log(`${order.type} is making`)
    return;
    }
}

function serveChai(order:chai):string{
    return `${order.type} is ready to serve`
}


type TeaRecipe={
    milk:string,
    water:string
}

class AnyChai implements TeaRecipe{
    milk='200ml';
    water='20ml';

}


// type CupSize='small'|'medium'|'large'

interface CupSize{
    size:"small"|"medium"|"large"
}

class Chai implements CupSize{
    size: "small" | "medium" | "large"='large';
}


// type response={success:true}|{success:false};

// class res implements response{
//     success: boolean=true;
// }


interface response{
    status:{success:true}|{success:false};
}

class res implements response{
    status: { success: true; } | { success: false; }={success:true};
}

// Union Type:
type console='xbox'|'playstation'

function gaming(consoletype:console):void{
    console.log(consoletype)
}


// intersection Type
type basicTea={tealeaves:number}
type colorTea={color:string}

type customTea=basicTea & colorTea

const cup:customTea={
    tealeaves:2,
    color:'green'
}


type User={
    name:string,
    message?:string
}

const u1:User={name:'ali'}
const u2:User={name:'ahmad',message:'This is typeScript'}


type config={
    readonly appName:string,
    version:number
}

const cfg:config={
    appName:'UltraEdits',
    version:1
}


