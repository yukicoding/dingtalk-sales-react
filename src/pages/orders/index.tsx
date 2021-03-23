import React,{useState} from 'react'
import { Tabs, WhiteSpace,TabBar } from 'antd-mobile'
import styles from './index.less'
import activeImage1 from '@/assets/images/icon_all_fill.png'
import image1 from '@/assets/images/icon_all_fill_unselectef.png'
import activeImage2 from '@/assets/images/icon_linchuang_selected.png'
import image2 from '@/assets/images/icon_linchuang_unselected.png'
import activeImage3 from '@/assets/images/icon_science_selected.png'
import image3 from '@/assets/images/icon_science_unselected.png'
import Doing from './doing'
import Done from './done'

const tabs = [
  { title: '进行中' },
  { title: '已完成' },
];
export default function Orders(props:any) {
  const [state,setState] = useState('')
  const [ selectedTab,setSelectedTab] = useState(1)
  const [ hidden,setHidden] = useState(false)
  const [ fullScreen,setFullScreen] = useState(false)
  const [index,setIndex] = useState(0)
  const [searchValue,setSearchValue] = useState('')
  const onChange = (value:string)=>{
    setSearchValue(value)
  }
  return(
    <div className={styles['orders']}>

    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { setIndex(index) }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      usePaged={false}
    >
      {
        index===0?<Doing></Doing>:<Done></Done>
      }
    </Tabs>
   
    <WhiteSpace />

    <div>
        <TabBar
        className={styles['tab-bar']}
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            title="全部订单"
            key="全部订单"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${image1}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${activeImage1}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={selectedTab === 1}
            badge={1}
            onPress={() => {
              setSelectedTab(1)
            
            }}
            data-seed="logId"
          >
            
          </TabBar.Item>
          
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${image2}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${activeImage2}) center center /  21px 21px no-repeat` }}
              />
            }
            title="临床订单"
            key="临床订单"
            dot
            selected={selectedTab === 2}
            onPress={() => {
              setSelectedTab(2)
             
            }}
          >
            
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: image3 }}
            selectedIcon={{ uri: activeImage3 }}
            title="科研订单"
            key="科研订单"
            selected={selectedTab === 3}
            onPress={() => {
              setSelectedTab(3)
              
            }}
          >
           
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  );
}
