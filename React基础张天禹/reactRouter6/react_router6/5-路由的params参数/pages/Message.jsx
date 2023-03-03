import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Message() {

  const [data] = useState([
    {id:'001',title:'消息1'},
    {id:'002',title:'消息2'},
    {id:'003',title:'消息3'},
  ])
  return (
    <div>
      <ul>
        {
          data.map(msgObj => {
            return (
              <li key={msgObj.id}>
                <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
              </li>
            )
          })
        }
    </ul>
      <Outlet/>
    </div>
  );
}
