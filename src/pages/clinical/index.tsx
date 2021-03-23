import styles from './index.less';
import {
  Card,
  WingBlank,
  WhiteSpace,
  InputItem,
  TextareaItem,
  Pagination,
  Icon,
  Picker,
  PickerView,
} from 'antd-mobile';
import CodeBar from '@/components/codeBar';
import { useModel,history } from 'umi';
import { useState,useEffect } from 'react';
import { cityData } from '@/data/format';
import PickerChildren from '@/components/PickerChildren';
export default function Clinical(props: any) {

  const { orderNum, formData, setFormData, production } = useModel(
    'useGlobal',
    (model) => ({
      orderNum: model.orderNum,
      formData: model.formData,
      setFormData: model.setFormData,
      production: model.production,
    }),
  );
  useEffect(() => {
    console.log( Number(formData.order_price) + Number(formData.report_price))
  }, [])
  const [page, setPage] = useState(0);
  const toPre = () => {
    setPage(0);
  };
  const toNext = () => {
    setPage(1);
  };
  const idType = [
    {
      label: '身份证',
      value: '身份证',
    },
    {
      label: '其他证件',
      value: '其他证件',
    },
  ];
  const booldType = [
    {
      label: '术前',
      value: '术前',
    },
    {
      label: '术后',
      value: '术后',
    },
  ];
  const organizationType = [
    {
      label: '深圳市海普洛斯生物科技有限公司',
      value: '深圳市海普洛斯生物科技有限公司',
    },
    {
      label: '深圳海普洛斯医学检验实验室',
      value: '深圳海普洛斯医学检验实验室',
    },
  ]
  return (
    <div className={styles['clinical']}>
      <CodeBar orderNum={orderNum}></CodeBar>
      <WingBlank size="sm">
        <WhiteSpace size="lg" />
        {page === 0 ? (
          <>
            <Card>
              <Card.Header title="客户信息 Client Information" />
              <Card.Body>
                <InputItem placeholder="请输入受检者姓名">姓名</InputItem>
                <Picker
                  data={idType}
                  cols={1}
                  extra="请输入受检者证件类型"
                  title="证件类型"
                  value={formData.id_type}
                  onChange={(value) =>
                    setFormData({ ...formData, id_type: value })
                  }
                  onOk={(value) => setFormData({ ...formData, id_type: value })}
                >
                  <PickerChildren value={formData.id_type}>
                    证件类型
                  </PickerChildren>
                </Picker>
                <InputItem
                  placeholder="请输入受检者身份证号码"
                  extra={
                    <button style={{ height: '1.3rem', paddingBottom: '1rem' }}>
                      检索
                    </button>
                  }
                >
                  身份证号码
                </InputItem>
                <InputItem placeholder="请输入受检者电话">电话</InputItem>
                <Picker
                  title="选择地区"
                  extra="请选择(可选)"
                  data={cityData}
                  value={formData.city}
                  onChange={(value) =>
                    setFormData({ ...formData, city: value })
                  }
                  onOk={(value) => setFormData({ ...formData, city: value })}
                  cols={2}
                >
                  <PickerChildren value={formData.city}>地区</PickerChildren>
                </Picker>

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
              <Card.Header title="产品信息 Order Information" />
              <Card.Body>
                <Picker
                  title="请选择产品"
                  extra="请选择(可选)"
                  data={production}
                  value={formData.product}
                  onChange={(value) =>
                    setFormData({ ...formData, product: value })
                  }
                  onOk={(value) => setFormData({ ...formData, product: value })}
                  cols={3}
                >
                  <PickerChildren value={formData.product}>产品</PickerChildren>
                </Picker>

                <Picker
                  data={booldType}
                  cols={1}
                  extra="请输入受检者血液类型"
                  title="血液类型"
                  value={formData.blood_type}
                  onChange={(value) =>
                    setFormData({ ...formData, blood_type: value })
                  }
                  onOk={(value) => setFormData({ ...formData, blood_type: value })}
                >
                  <PickerChildren value={formData.blood_type}>
                    血液类型
                  </PickerChildren>
                </Picker>
                <InputItem placeholder="请选择癌肿" onClick={()=>history.push('/disease')} value={formData.disease}>癌肿类型</InputItem>
                <Picker
                  data={organizationType}
                  cols={1}
                  extra="请输入应收组织"
                  title="应收组织"
                  value={formData.organization}
                  onChange={(value) =>
                    setFormData({ ...formData, organization: value })
                  }
                  onOk={(value) => setFormData({ ...formData, organization: value })}
                >
                  <PickerChildren value={formData.organization}>
                    应收组织
                  </PickerChildren>
                </Picker>
                <InputItem placeholder="请输入临床诊断">临床诊断</InputItem>
                <InputItem placeholder="请选择产品">产品原价</InputItem>
                <InputItem placeholder="请输入订单金额">订单金额(元)</InputItem>
                <InputItem placeholder="请输入溢价金额">
                报告解读费(元)
                </InputItem>
              </Card.Body>
            </Card>
            <WhiteSpace size="sm" />
            <Card>
              <Card.Header title="收款信息 Receipt Information" />
              <Card.Body>
                <InputItem placeholder="收款金额" value={'1'}>收款金额</InputItem>
              </Card.Body>
            </Card>
            <p className="sub-title" style={{ letterSpacing: 8 }}>
              请继续填写下一页
            </p>
          </>
        ) : (
          <>1234</>
        )}
      </WingBlank>
      <Pagination
        total={2}
        className="custom-pagination-with-icon"
        current={1}
        locale={{
          prevText: (
            <span className="arrow-align" onClick={toPre}>
              <Icon type="left" />
              上一步
            </span>
          ),
          nextText: (
            <span className="arrow-align" onClick={toNext}>
              下一步
              <Icon type="right" />
            </span>
          ),
        }}
      />
    </div>
  );
}
