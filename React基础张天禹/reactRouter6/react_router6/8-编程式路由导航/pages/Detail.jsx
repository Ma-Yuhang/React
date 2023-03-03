import React from 'react'
// import {useParams} from 'react-router-dom'
// import {useSearchParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
export default function Detail() {

  // 接收params参数
  // const {id,title,content} = useParams()

  // 接收search参数
  // const [search,setSearch] = useSearchParams()
  // const id = search.get('id')
  // const title = search.get('title')
  // const content = search.get('content')

  // 接收state参数
  const {state:{id,title,content}} = useLocation()

  return (
    <div>
      <ul>
        <li>id: {id}</li>
        <li>标题: {title}</li>
        <li>内容: {content}</li>
      </ul>
    </div>
  )
}
