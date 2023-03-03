import React, { Component } from 'react'
import { Button } from 'antd';
import {WechatOutlined} from '@ant-design/icons';
import 'antd/dist/antd.less';

export default class App extends Component {

  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
        <WechatOutlined />
      </div>
    );
  }
}
