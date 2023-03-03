import About from '../pages/About'
import Home from '../pages/Home'
import {Navigate} from 'react-router-dom'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default [
  {
    path: '/about',
    element: <About />
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
        path: 'Message',
        element: <Message/>,
        children: [
          {
            path: 'detail/:id/:title',
            element: <Detail/>
          }
        ]
      },
    ]
  },
  {
    path: '/',
    element: <Navigate to='about'/>
  },
]