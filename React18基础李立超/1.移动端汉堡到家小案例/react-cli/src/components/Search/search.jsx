import React, { useEffect, useState } from 'react'
import './search.css'
export default function Search(props) {

  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    let timer = setTimeout(() => {
      props.filterMeals(keyword)
    }, 500);
    return () => {
      // 在下一次更新之前调用
      if(timer) clearTimeout(timer)
    }
  },[keyword])


  function change(e) {
    setKeyword(e.target.value.trim())
  }

  return (
    <div className='search-box'>
      <input 
        value={keyword}
        type="text" 
        placeholder='请输入关键字' 
        className='search' 
        onChange={(e) => change(e)}
      />
    </div>
  )
}
