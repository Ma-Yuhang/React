import React, { Component } from 'react';
import axios from 'axios'

export default class Header extends Component {

   // 点击搜索
   search = () => {
    const {UpdateState} = this.props
      // 拿到输入的值
      const {value: keyword} = this.inputNode
      
      UpdateState({isFirst: false, isLoading: true})
      // 发请求
      axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
         UpdateState({isLoading: false,users:res.data.items})
      },err => {
        UpdateState({err: err.message})
      })
   }

   render() {
      
     return (
       <section className="jumbotron">
         <h3 className="jumbotron-heading">Search Github Users</h3>
         <div>
           <input ref={c => this.inputNode = c} type="text" placeholder="enter the name you search" />&nbsp;
           <button onClick={this.search}>Search</button>
         </div>
       </section>
     );
   } 
}
