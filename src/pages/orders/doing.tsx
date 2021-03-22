import React,{useState} from 'react'
import {SearchBar} from 'antd-mobile'


export default function Doing(props:any) {
  const [searchValue,setSearchValue] = useState('')
  const onChange = (value:string)=>{
    setSearchValue(value)
  }
  return(
    <div>
      
       <SearchBar
        value={searchValue}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={onChange}
        cancelText="确定"
      />
      <h1>Doing</h1>
    </div>
  )
}