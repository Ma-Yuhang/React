import React, { useState } from 'react'
import Add from './components/Add'
import { useNavigate,Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import News from './pages/News'
export default function App() {

  const [id, setID] = useState(2)
  const toHome = () => {
    navigate(`/home/${id}`)
  }

  const toAbout = ()=> {
    navigate(`/about?name=ma`)
  }
  const toNews = ()=> {
    navigate(`/news`,{
      state: {
        msg: 'news页面收到的state参数'
      }
    })
  }
  const navigate = useNavigate()
    return (
      <div>
        <h1>App页面</h1>
        <Add onclick={() => console.log(1)}>lala</Add>
        <button onClick={toHome}>展示home页面</button>
        <button onClick={toAbout}>展示about页面</button>
        <button onClick={toNews}>展示news页面</button>
        <Routes>
          <Route path='/about' element={<About></About>}/>
          <Route path='/home/:id' element={<Home></Home>}/>
          <Route path='/news' element={<News></News>}/>
          <Route path='/' element={<Navigate to='home'/>}/>
        </Routes>
      </div>
    )
}