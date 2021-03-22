import React from 'react'
import {} from 'antd-mobile'
import btn_selectlinchuang from '@/assets/images/btn_selectlinchuang.png'
import btn_selectscience from '@/assets/images/btn_selectscience.png'
import {history} from 'umi'
import styles from './index.less'
export default function Category(props:any) {
 const toClinical = ()=>{
  history.push('/clinical')
   console.log("toClincial")
 }
 const toResearch = ()=>{
  history.push('/research')
  //  console.log("toResearch")
 }
return(
  <div className={styles["category"]}>
  <h1>请选择订单类别</h1>
  <div className={styles["categories"]}>
    <img onClick={toClinical} src={btn_selectlinchuang} alt=""/>
    <img onClick={toResearch} src={btn_selectscience} alt=""/>
  </div>
</div>
)
}