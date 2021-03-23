import {useState,useCallback} from 'react'
interface typeone{
  orderNum:string;
  setOrderNum:()=>void
}
export default function useGlobal(props:any) {
  const [orderNum, setOrderNum] = useState('')

  return{
    orderNum,
    setOrderNum
  }
}
