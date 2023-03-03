import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import {Navigate} from 'react-router-dom'
export default [
  {
    path: '/',
    element: <Navigate to='/about'/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/home',
    element: <Home/>,
    children: [
      {
        path: 'news',
        element: <News/>
      },
      {
        path: 'message',
        element: <Message/>,
        children: [
          {
            path: 'detail',
            element: <Detail/>
          }
        ]
      },
    ]
  },
]