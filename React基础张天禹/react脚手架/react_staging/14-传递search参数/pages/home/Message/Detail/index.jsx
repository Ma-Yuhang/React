import React, { Component } from 'react'
import qs from 'qs'
const data = [
  {id: '01', content: '消息1的内容'},
  {id: '02', content: '消息2的内容'},
  {id: '03', content: '消息3的内容'},
]
export default class Detail extends Component {

  render() {
    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))
    const findres = data.find(msgObj => {
      return msgObj.id === id
    })
    return (
      <div>
        <ul>
          <li>id:{id}</li>
          <li>title:{title}</li>
          <li>content:{findres.content}</li>
        </ul>
      </div>
    )
  }
}
