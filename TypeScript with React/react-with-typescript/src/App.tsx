import { OrderForm } from './component/OrderForm'

function App() {

  return (
    <>
    <OrderForm onSubmit={order=>{console.log(`Name: ${order.name} Cups:${order.Cups}`)}}/>
    </>
  )
}

export default App
