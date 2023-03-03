import React, { Component } from 'react'

const data = [
  {id: '01', content: '消息1的内容'},
  {id: '02', content: '消息2的内容'},
  {id: '03', content: '消息3的内容'},
]
export default class Detail extends Component {

  render() {
    const {id, title} = this.props.match.params
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
