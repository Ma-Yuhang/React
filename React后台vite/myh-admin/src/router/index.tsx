import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import LayoutComponent from '@/pages/Layout';
import Login from '@/components/Login';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const User = lazy(() => import('../pages/User'));
const Team = lazy(() => import('../pages/Team'));
const File = lazy(() => import('../pages/File'));
const Tom = lazy(() => import('../pages/User/Tom'));
const Alex = lazy(() => import('../pages/User/Alex'));
const Bill = lazy(() => import('../pages/User/Bill'));
const Team1 = lazy(() => import('../pages/Team/Team1'));
const Team2 = lazy(() => import('../pages/Team/Team2'));

const withLoadingComponent = (component: JSX.Element) => (
  <Suspense fallback={<div>loading...</div>}>
    {component}
  </Suspense>
)
export default [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '/home',
        element: withLoadingComponent(<Home />),
      },
      {
        path: '/about',
        element: withLoadingComponent(<About />),
      },
      {
        path: '/user',
        element: <Navigate to='/user/tom'/>,
      },
      {
        path: '/user',
        element: withLoadingComponent(<User />),
        children: [
          {
            path: 'tom',
            element: withLoadingComponent(<Tom />),
          },
          {
            path: 'bill',
            element: withLoadingComponent(<Bill />),
          },
          {
            path: 'alex',
            element: withLoadingComponent(<Alex />),
          },
        ]
      },
      {
        path: '/team',
        element: <Navigate to='/team/team1'/>,
      },
      {
        path: '/team',
        element: withLoadingComponent(<Team />),
        children: [
          {
            path: 'team1',
            element: withLoadingComponent(<Team1 />),
          },
          {
            path: 'team2',
            element: withLoadingComponent(<Team2 />),
          },
        ]
      },
      {
        path: '/files',
        element: withLoadingComponent(<File />),
      },
    ]
  },
  {
    path: '/login',
    element: withLoadingComponent(<Login/>)
  }
];