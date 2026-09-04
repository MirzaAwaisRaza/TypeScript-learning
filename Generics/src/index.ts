function WrapInArray<T>(items:T):T{
    return items;
}

console.log(WrapInArray("Masala"))
console.log(WrapInArray(1))
console.log(WrapInArray([1,2,3]))


function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

pair("masala",20)
pair("Ginger",{isHot:true,price:30})

interface Generic<T>{
    name:T;
    price:T;
}



class applyGeneric implements Generic<unknown>{
    name="Ali"
    price=12
}

const apply:Generic<unknown>={
    name:"Ali",
    price:12,
}


