import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number];

// 菜单的数据
const items: MenuItem[] = [
  {
    label: 'Home',
    key: '/home',
    icon: <PieChartOutlined />,
  },
  {
    label: 'About',
    key: '/about',
    icon: <DesktopOutlined />,
  },
  {
    label: 'User',
    key: 'user',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Tom',
        key: '/user/tom',
      },
      {
        label: 'Bill',
        key: '/user/bill',
      },
      {
        label: 'Alex',
        key: '/user/alex',
      },
    ]
  },
  {
    label: 'Team',
    key: 'team',
    icon: <TeamOutlined />,
    children: [
      {
        label: 'Team 1',
        key: '/Team/Team1',
      },
      {
        label: 'Team 2',
        key: '/Team/Team2',
      },
    ]
  },
  {
    label: 'Files',
    key: '/files',
    icon: <FileOutlined />,
  },
];

export default function MainMenu() {

    // 默认选中的导航
    const key = useLocation().pathname
    const openKey: any = items.find(item => {
      if(item!['children'] && item!['children'].length > 1){
        return item!['children'].find((item2: { key: string; }) => {
          return item2.key === key
        })
      }
    })?.key || ''
    
    // 编程式路由导航
    const navigate = useNavigate()
    // 点击菜单
    function menuClick(e: {key: string}) {
      navigate(e.key)
    }
  return (
    <div>
      <Menu theme='dark' defaultOpenKeys={[openKey]} defaultSelectedKeys={[key]} mode="inline" 
          items={items} onClick={menuClick}/>
    </div>
  )
}