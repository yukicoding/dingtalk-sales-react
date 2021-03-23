import styles from './index.less';
import { Card, WingBlank, WhiteSpace, InputItem ,TextareaItem,Pagination, Icon,Menu, ActivityIndicator, NavBar} from 'antd-mobile';
import CodeBar from '@/components/codeBar';
import {useModel} from 'umi'
import React,{useState} from 'react'
const initData = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false,
      },
      {
        label: 'Chinese Food',
        value: '2',
      }, {
        label: 'Hot Pot',
        value: '3',
      }, {
        label: 'Buffet',
        value: '4',
      }, {
        label: 'Fast Food',
        value: '5',
      }, {
        label: 'Snack',
        value: '6',
      }, {
        label: 'Bread',
        value: '7',
      }, {
        label: 'Fruit',
        value: '8',
      }, {
        label: 'Noodle',
        value: '9',
      }, {
        label: 'Leisure Food',
        value: '10',
      }],
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1',
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true,
      }, {
        label: 'C-Store',
        value: '3',
      }, {
        label: 'Personal Care',
        value: '4',
      }],
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1',
      },
    ],
  },
];

export default function Clinical(props: any) {
  const {orderNum} = useModel('useGlobal',model=>({orderNum:model.orderNum}))
  const [page,setPage] = useState(0)
  const [data,setData] = useState(initData)
  const [show,setShow] = useState(false)
  const onChange = (value:string) => {
    let label = '';
    data.forEach((dataItem:any) => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem:any) => {
            if (cItem.value === value[1]) {
              label += ` ${cItem.label}`;
            }
          });
        }
      }
    });
    console.log(label);
  }
  const handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    setShow(!show)
    // mock for async data loading
    if (!data) {
      setTimeout(() => {
        setData(data)
      }, 500);
    }
  }
  const onMaskClick = () => {
    setShow(false)
    
  }
  const menuEl = (
    <Menu
      className="foo-menu"
      data={initData}
      value={['1', '3']}
      onChange={()=>onChange}
      height={document.documentElement.clientHeight * 0.6}
    />
  );
  const loadingEl = (
    <div style={{ width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
      <ActivityIndicator size="large" />
    </div>
  );
  const toPre = ()=>{
    setPage(0)
  }
  const toNext = ()=>{
    setPage(1)
  }
  return (
    <div className={styles['clinical']}>
       <div className={show ? 'menu-active' : ''}>
        <div>
          <NavBar
            leftContent="Menu"
            mode="light"
            icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg" className="am-icon am-icon-md" alt="" />}
            onLeftClick={handleClick}
            className="top-nav-bar"
          >
            Here is title
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={onMaskClick} /> : null}
      </div>
      <CodeBar orderNum={orderNum}></CodeBar>
      <WingBlank size="sm">
        <WhiteSpace size="lg" />
          {
            page===0?<>
                      <Card>
                    <Card.Header title="客户信息 Client Information" />
                    <Card.Body>
                      <InputItem placeholder="请输入受检者姓名">姓名</InputItem>
                      <InputItem placeholder="请输入受检者证件类型">证件类型</InputItem>
                      <InputItem placeholder="请输入受检者身份证号码" extra={<button style={{height:"1.3rem",paddingBottom:"1rem"}}>检索</button>}>
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
                      <InputItem placeholder="请选择产品">产品</InputItem>
                      <InputItem placeholder="请选择癌肿">癌肿</InputItem>
                      <InputItem placeholder="请选择应收组织">应收组织</InputItem>
                      <InputItem placeholder="请输入临床诊断">临床诊断</InputItem>
                      <InputItem placeholder="请选择产品">产品原价</InputItem>
                      <InputItem placeholder="请输入订单金额">订单金额(元)</InputItem>
                      <InputItem placeholder="请输入报告解读费">溢价金额(元)</InputItem>
                    </Card.Body>
                  </Card>
                  <WhiteSpace size="sm" />
                  <Card>
                    <Card.Header title="收款信息 Receipt Information"/>
                    <Card.Body>
                      <InputItem placeholder="收款金额">收款金额</InputItem>         
                    </Card.Body>
                    
                  </Card>
                  <p className="sub-title" style={{letterSpacing:8}}>请继续填写下一页</p>
                  </>:
                  <>1234</>
          }
      </WingBlank>
    <Pagination 
      total={2}
      className="custom-pagination-with-icon"
      current={1}
      locale={{
        prevText: (<span className="arrow-align" onClick={toPre}><Icon type="left" />上一步</span>),
        nextText: (<span className="arrow-align" onClick={toNext}>下一步<Icon type="right" /></span>),
      }}
    />
    </div>
  );
}
