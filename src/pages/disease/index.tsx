import React, { useState,useEffect } from 'react'
import {List,WhiteSpace,WingBlank,SearchBar} from 'antd-mobile'
import {useModel,history} from 'umi'
import styles from './index.less'
const Item = List.Item
export default function Disease(props:any) {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  const {diseaseList,formData,setFormData} = useModel('useGlobal',(model)=>({diseaseList:model.diseaseList,formData:model.formData,setFormData:model.setFormData}))
  const [search,setSearch] = useState('')

  const searchCommit = (item)=>{
    setFormData({...formData,disease:item})
    history.go(-1)
  }
return(
 <div className={styles["search"]}>
      <WingBlank>
    <SearchBar
        value={search}
        placeholder="Search"
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={value => console.log(search)}
        onChange={(value)=>setSearch(value)}
        showCancelButton
        cancelText="搜索"
      />
      </WingBlank>
   <WingBlank>
   <List>
    {
      diseaseList.map((item,index)=>{
        return <Item key={index} onClick={()=>searchCommit(item)}>{item}</Item>
      })
    }
   </List>
   </WingBlank>
 </div>
)
}