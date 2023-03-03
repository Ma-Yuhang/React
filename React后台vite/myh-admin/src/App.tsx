import { useRoutes } from "react-router-dom";
import router from './router'
import 'antd/dist/antd.css'
export default function App() {
  const element = useRoutes(router)
  return (
    <div>
      {element}
    </div>
  )
}