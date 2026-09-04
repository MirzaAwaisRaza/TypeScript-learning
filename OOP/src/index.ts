class Chai{
    public chaiName:string;
    private secretIngredients:string;
    constructor(name:string,secretIngredients:string){
        this.chaiName=name;
        this.secretIngredients=secretIngredients;
    }

    getSecretIngredients(){
        return this.chaiName;
    }

}

const chai=new Chai("greentea","greenColor");

class Shop{
    protected shopName:string;
    private shopSale:string;
    constructor(name:string,sale:string){
        this.shopName=name;
        this.shopSale=sale;
    }
}
class branch extends Shop{
    
    getShopName(){
        return this.shopName;
    }

}

class Animal{
    static eat():string{return `anything`}
    run():void{}
}

const animal=new Animal();

class newChai{
    public chaiName:string;
    constructor(name:string){
        this.chaiName=name;
    }
}

type chai={
    price:number;
    name:string;
}

abstract class Making{
    abstract make():chai;
}

class myChai extends Making{
    make():chai{
        return {price:2,name:"karak Chai"}
    }
}

class Fire{
    fireForChai(){
        console.log(`fire is given for making chai`)
    }
}

class MakeChai{
    constructor(public fire:Fire){

    }
    make(){
        this.fire.fireForChai()
        console.log(`chai cooked!`)
    }
}







