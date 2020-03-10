import React, { useState, useEffect } from 'react'
import MyView from '../router/myView'
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function Home(props) {
    const [collapsed, setcollapsed] = useState(false);
    const [list, setlist] = useState( [] );

    useEffect(() => {
        let initData = async () => {
            let res = await React.http('get', '/crm/menu');
            if (res.data.code === 200) {
                setlist(res.data.data)
                return
            }
        }
        initData()
    }, [props])
    let work = () => {
        props.history.push('/home/work')
    }
    let itemfn = (path) => {
        props.history.push(path)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setcollapsed(!collapsed)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="10">
                        <PieChartOutlined />
                        <span onClick={() => work()}>工作台</span>
                    </Menu.Item>
                    {
                        list.map((item, index) => {
                            return <SubMenu key={['sub', ++index].join('')} title={<span>
                                <UserOutlined />
                                <span>{item.belong}</span>
                            </span>
                            } >
                                {
                                    item.sub.map(v => {
                                        return <Menu.Item key={v.key} onClick={() => itemfn(v.to)}>{v.name}</Menu.Item>
                                    })
                                }

                            </SubMenu>
                        })
                    }

                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <MyView routerList={props.children}{...props} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>RAMBLE Created by WXY</Footer>
            </Layout>
        </Layout>
    )

}
export default Home