import React from 'react'
import {useModel} from 'umi'
import { Card, WingBlank, WhiteSpace, InputItem ,TextareaItem,Pagination, Icon} from 'antd-mobile';
import CodeBar from '@/components/codeBar';
import styles from './index.less'
export default function Research(props:any) {
  const {orderNum} = useModel('useGlobal',model=>({orderNum:model.orderNum}))
  return(
    <div className={styles['research']}>
      <CodeBar orderNum={orderNum}></CodeBar>
      <WingBlank size="sm">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header title="客户信息 Client Information" />
          <Card.Body>
            <InputItem placeholder="请输入受检者姓名">姓名</InputItem>
            <InputItem placeholder="请输入受检者证件类型">证件类型</InputItem>
            <InputItem placeholder="请输入受检者身份证号码" extra={<button style={{height:"1.3rem"}}>检索</button>}>
              身份证号码
            </InputItem>
            <InputItem placeholder="请输入受检者电话">电话</InputItem>
            <InputItem placeholder="请输入受检者所在地区">所在地区</InputItem>
            <TextareaItem
            title="邮寄地址"
            placeholder="请输入受检者所在地区"
            data-seed="logId"
            autoHeight
          />
            
          </Card.Body>
        </Card>
        <WhiteSpace size="sm" />
        <Card>
          <Card.Header title="产品信息 Order Information"/>
          <Card.Body>
            <InputItem placeholder="请输入受检者电话">电话</InputItem>
            <InputItem placeholder="请输入受检者所在地区">所在地区</InputItem>
            <InputItem placeholder="请输入受检者所在地区">邮寄地址</InputItem>
            <InputItem placeholder="请输入受检者电话">电话</InputItem>
            <InputItem placeholder="请输入受检者所在地区">所在地区</InputItem>
            <InputItem placeholder="请输入受检者所在地区">邮寄地址</InputItem>
          </Card.Body>
        </Card>
        <WhiteSpace size="sm" />
        <Card>
          <Card.Header title="收款信息 Receipt Information"/>
          <Card.Body>
            <InputItem placeholder="收款金额">收款金额</InputItem>         
          </Card.Body>
        </Card>
      </WingBlank>
      <p className="sub-title">Button with text and icon</p>
    <Pagination 
      total={2}
      className="custom-pagination-with-icon"
      current={1}
      locale={{
        prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
        nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
      }}
    />
    </div>
  )
}