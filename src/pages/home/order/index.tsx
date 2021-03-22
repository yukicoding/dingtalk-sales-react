import React,{useState} from 'react'
import OrdersOne from './Orders-one'
import Orderstwo from './Orders-two'
export default function Orders(props:any) {
  const [index,setIndex] = useState(true)
  return(
    <div>
      {
        index?<OrdersOne></OrdersOne>:<Orderstwo></Orderstwo>
      }

      <button onClick={()=>setIndex(true)}>1</button>
      <button onClick={()=>setIndex(false)}>2</button>
    </div>
  )
}