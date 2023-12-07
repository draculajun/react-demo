import './App.css';
import React from "react";
import {ConfigProvider, Layout, Space} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FE6022FF',
                    borderRadius: 5,
                },
            }}>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Space direction="vertical" style={{width: '80%'}}>
                    <Layout>
                        <Header style={{textAlign: 'center', backgroundColor: '#7dbcea',}}>Header</Header>
                        <Content style={{
                            backgroundColor: "white",
                        }}>
                            <Outlet/>
                        </Content>
                        <Footer style={{
                            textAlign: 'center',
                            color: '#fff',
                            backgroundColor: '#7dbcea',
                        }}>
                            Footer
                        </Footer>
                    </Layout>
                </Space>
            </div>
        </ConfigProvider>)
}

export default App;


