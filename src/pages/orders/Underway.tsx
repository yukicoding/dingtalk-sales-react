import React,{useState} from 'react'
import { Tabs, WhiteSpace, Badge,SearchBar,TabBar } from 'antd-mobile'
import styles from './Orders.less'
import activeImage1 from '@/assets/images/icon_all_fill.png'
import image1 from '@/assets/images/icon_all_fill_unselectef.png'
import activeImage2 from '@/assets/images/icon_linchuang_selected.png'
import image2 from '@/assets/images/icon_linchuang_unselected.png'
import activeImage3 from '@/assets/images/icon_science_selected.png'
import image3 from '@/assets/images/icon_science_unselected.png'

export default function Orders(props:any) {
  const [state,setState] = useState('')
  const [ selectedTab,setSelectedTab] = useState('redTab')
  const [ hidden,setHidden] = useState(false)
  const [ fullScreen,setFullScreen] = useState(false)
  const [index,setIndex] = useState(0)
  const tabs = [
    { title: '进行中' },
    { title: '已完成' },
  ];
  const onChange = (value:string)=>{
    setState(value)

    console.log(state)
  }
  const renderContentPage = (index:number)=>{
    if(index===0){
      return (
        <div className={styles["content-page"]}>暂无相关订单1</div>
      )
    }
    return <div className={styles["content-page"]}>暂无相关订单2</div>
  }
const renderContent= (pageText:string) =>{
  return (
   <div className={styles['content']}>
    <SearchBar
      value={state}
      placeholder="Search"
      onSubmit={value => console.log(value, 'onSubmit')}
      onClear={value => console.log(value, 'onClear')}
      onFocus={() => console.log('onFocus')}
      onBlur={() => console.log('onBlur')}
      onCancel={() => console.log(state)}
      showCancelButton
      cancelText={'确认'}
      onChange={(value)=>onChange(value)}
  />
    {
      renderContentPage(index)
    }
   </div>

  );
}

  return(
    <div className={styles['orders']}>
      <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { setIndex(index) }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >   

    </Tabs>
    <div  style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
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
            selected={selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              
            
            }}
            data-seed="logId"
          >
            {renderContent('全部订单')}
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
            selected={selectedTab === 'greenTab'}
            onPress={() => {
              
             
            }}
          >
            {renderContent('临床订单')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: image3 }}
            selectedIcon={{ uri: activeImage3 }}
            title="科研订单"
            key="科研订单"
            selected={selectedTab === 'yellowTab'}
            onPress={() => {
             
              
            }}
          >
            {renderContent('科研订单')}
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  )

}