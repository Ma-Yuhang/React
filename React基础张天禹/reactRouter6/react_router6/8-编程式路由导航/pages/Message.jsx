import React,{useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
export default function Meassge() {
  const [data] = useState([
    {id: '001',title:'消息1',content: '哈哈'},
    {id: '002',title:'消息2',content: '嘻嘻'},
    {id: '003',title:'消息3',content: '呵呵'},
  ])
  const navigate = useNavigate()

  // push查看
  function  pushShow(m) {
    navigate('detail', {
      state: {
        id: m.id,
        title: m.title,
        content: m.content
      }
    })
  }

  // function  pushShow(m) {
  //   navigate(`detail/${m.id}/${m.title}/${m.content}`)
  // }

  // replace查看
  function  replaceShow(m) {
    navigate('detail', {
      replace: true,
      state: {
        id: m.id,
        title: m.title,
        content: m.content
      }
    })
  }

  return (
    <div>
      <ul>
        {
          data.map(m => {
            return (
              <li key={m.id}>
                {/* params参数 */}
                {/* <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link> */}

                {/* search参数 */}
                {/* <Link to={`detail/?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link> */}

                {/* state参数 */}
                <Link to='detail' state={{id: m.id, title: m.title, content: m.content}}>{m.title}</Link>
                <button onClick={() => pushShow(m)}>push查看</button>
                <button onClick={() => replaceShow(m)}>replace查看</button>
              </li>
            )
          })
        }
      </ul>
      <Outlet/>
    </div>
  )
}
