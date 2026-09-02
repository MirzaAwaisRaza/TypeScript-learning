console.log('Welcome to typeScript')

let temp:any="21"
let answer:number=(temp as string).length

type Book={
    name:string
}

let bookName='{"name":"who moved my cheese"}'
let bookObject=JSON.parse(bookName) as Book

console.log(bookObject.name)

let inputElement:HTMLInputElement=document.getElementById('username') as  HTMLInputElement;
inputElement.value
inputElement.style.backgroundColor="red"


let value:any
value="codebases"
value=[1,2,3]
value=32

value.toUpperCase()

let newValue:unknown
newValue="codebases"
newValue=[1,2,3]
newValue=32
if(typeof newValue==="string"){
    newValue.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log('Error',error)
}


// const data:unknown='TypeScript';
// if(typeof data==='string'){
//     const newData:string=data;
//     console.log(newData)
// }

const data:unknown='TypeScript';
const newData:string=data as string;

type role='admin'|'users'|'superadmin'

function redirect(rolePerson:role):void{
    if(rolePerson==='admin'){
        console.log('Welcome to the admin dashboard')
        return;
    }
    if(rolePerson==='users'){
        console.log('Welcome to the users dashboard')
        return;
    }
    rolePerson;
}

function runServer():never{
    while(true){}
}



