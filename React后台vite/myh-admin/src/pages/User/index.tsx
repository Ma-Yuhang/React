import { Outlet } from 'react-router-dom'
export default function User() {
  return (
    <div>
      <h1>User页面</h1>
      <Outlet></Outlet>
    </div>
  )
}
