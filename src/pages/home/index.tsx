import React, { useState, useCallback, useEffect } from 'react';
import styles from './Home.less';
import { Button, Flex ,List, InputItem, WhiteSpace,Toast} from 'antd-mobile';
import {history} from 'umi';
import { useModel } from 'umi';
import orderBtn from '../../assets/images/Button_Order_pic.png';
import orderbill from '@/assets/images/getNumber_pic.png'
export default function Home() {
  const { orderNum, setOrderNum } = useModel("useGlobal", model => ({ orderNum: model.orderNum, setOrderNum: model.setOrderNum }));
  console.log(orderNum)
  const handleToOrders = ()=>{
    history.push('/category')
  }
  const handleClean = ()=>{
    console.log(orderNum)
  }
  return (
 <div>
      <div className={styles.home}>
      <Flex>
        <Flex.Item>
            <img className={styles["orderBtn"]} src={orderBtn} alt="订单按钮" onClick={handleToOrders}/>
        </Flex.Item>
        <Flex.Item> 
            <Button onClick={handleClean} icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}  size="small" style={{width:85,float:'right',color:"black",borderRadius:10}}>清除缓存</Button>
        </Flex.Item>
      </Flex>
      <div className={styles["guide-image"]}>
            <img src={orderbill} alt="扫描送检单号"/>
        </div>
      
        <InputItem 
        className={styles["orderInput"]}    
            clear
            placeholder="请输入单号"
            value={orderNum}
            onChange={(value)=>setOrderNum(value)}
            extra={
             <svg  className={styles['icon']} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2061" width="128" height="128"><path d="M186.181818 325.818182a46.545455 46.545455 0 1 1-93.090909 0V232.727273a139.636364 139.636364 0 0 1 139.636364-139.636364h93.090909a46.545455 46.545455 0 1 1 0 93.090909H232.727273a46.545455 46.545455 0 0 0-46.545455 46.545455v93.090909z m512-139.636364a46.545455 46.545455 0 0 1 0-93.090909h93.090909a139.636364 139.636364 0 0 1 139.636364 139.636364v93.090909a46.545455 46.545455 0 0 1-93.090909 0V232.727273a46.545455 46.545455 0 0 0-46.545455-46.545455h-93.090909z m139.636364 558.545455a46.545455 46.545455 0 0 1 93.090909 0v46.545454a139.636364 139.636364 0 0 1-139.636364 139.636364h-93.090909a46.545455 46.545455 0 0 1 0-93.090909h93.090909a46.545455 46.545455 0 0 0 46.545455-46.545455v-46.545454zM325.818182 837.818182a46.545455 46.545455 0 0 1 0 93.090909H232.727273a139.636364 139.636364 0 0 1-139.636364-139.636364v-46.545454a46.545455 46.545455 0 0 1 93.090909 0v46.545454a46.545455 46.545455 0 0 0 46.545455 46.545455h93.090909z m-93.090909-372.363637h558.545454a46.545455 46.545455 0 0 1 0 93.09091H232.727273a46.545455 46.545455 0 0 1 0-93.09091z" p-id="2062" fill="#108EE9"></path></svg>
              }
          >送检单号</InputItem>
       <Button onClick={handleToOrders} type={"primary"} style={{color:'white',marginTop:30}}>确定</Button>
       <p className={styles["version"]}>当前版本 {1}</p>
    </div>
    {/* <div className={styles.home}>
      <div className={styles['order-button']} style={{display: "inline-block"}}>
        <img src={orderBtn} alt="订单按钮"/>
      </div>
      <div className={styles['order-button']} style={{float: "right",marginTop: "0.3rem"}}>
        <Button type={"primary"}>清除缓存</Button>
      </div>

    </div> */}
 </div>
  )
}
