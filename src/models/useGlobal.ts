import {useState,useCallback,useEffect} from 'react'
import request from '@/utils/request'
import {formatCityData,formatProduct,formatProductDetail} from '@/data/format';
const initOrders:Orders = {
  city:'',
  name:'',
  id_type:'',
  id_num:'',
  phone:'',
  email_area:'',
  address:'',
  product:'',
  blood_type:'',
  disease:'',
  organization:'',
  diagnosis:'',
  orgin_price:'',
  order_price:'',
  report_price:'',
  recive_price:''
}
export default function useGlobal(props:any) {
  useEffect(() => {
    request('/dingding/getall')
    .then((res)=>{
      setProduction(formatCityData(res[0].c)) 
    })
    request('/orders/disease/search')
    .then((res)=>{
      setDiseaseList(res)
    })
  }, [])
  const [orderNum, setOrderNum] = useState('')
  const [formData,setFormData] = useState(initOrders)
  const [production,setProduction] = useState([])
  const [diseaseList,setDiseaseList] = useState([])
  return{
    orderNum,
    formData,
    setFormData,
    production,
    //搜索页
    diseaseList
  }
}
