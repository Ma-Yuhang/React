import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../store/actions/person'
class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id: nanoid(), name, age}
    this.props.addPerson(personObj)
  }


  render() {
    const {personArr, count} = this.props
    return (
      <div>
        <h2>我是Person组件</h2>
        <h3>Count组件的和为：{count}</h3>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入名字'/>
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄'/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            personArr.map(personObj => {
              return <li key={personObj.id}>姓名：{personObj.name}-年龄：{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    personArr: state.persons,
    count: state.count
  }),
  {addPerson}
)(Person)
