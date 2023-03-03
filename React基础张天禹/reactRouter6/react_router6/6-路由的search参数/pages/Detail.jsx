import React from 'react'
import {useSearchParams} from 'react-router-dom'
export default function Detail() {

  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=005&title=哈哈')}>点击修改search参数</button>
      </li>
      <li>{id}</li>
      <li>{title}</li>
    </ul>
  )
}
