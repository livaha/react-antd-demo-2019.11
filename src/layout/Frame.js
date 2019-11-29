import React from 'react';
import { Layout } from 'antd';
import Nav from './Nav';
import '../assets/style/layout.less'
const { Content } = Layout;
export default function Frame(props) {
  return (<div>
    <Layout className="layout">
      <Layout>
        <Nav/>
        <Content className="content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </div>)
}