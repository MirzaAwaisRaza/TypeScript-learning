import { useState } from "react"
import { useEffect } from "react";

interface orderType{
    name:string;
    Cups:number;
}

interface OrderFormProps{
    onSubmit(order:orderType):void;
}

export const OrderForm = ({onSubmit}:OrderFormProps) => {
    const [name, setName] = useState<string>("Masala")
    const [Cups, setCups] = useState<number>(1)


    useEffect(() => {
        console.log("Re-render")
    })


    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        console.log(`submit button clicked!`);
        e.preventDefault();
        onSubmit({name,Cups});
    }


  return (
    <form onSubmit={handleSubmit} className="formStyle" >
        <label htmlFor="name">ChaiName</label>
        <input type="text" name="name" id="name" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}} />
        <label htmlFor="Cups">How many Cups</label>
        <input type="number" name="Cups" value={Cups} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setCups(Number(e.target.value))}}  id="Cups" />
        <button>Order</button>
    </form>
  )
}
