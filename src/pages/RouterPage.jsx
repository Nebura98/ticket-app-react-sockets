import React, { useContext } from 'react'

import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons'

import { Ingresar, CrearTiquete, Cola, Escritorio, } from './index'
import { UiContext } from '../context/UiContext'



const { Sider, Content } = Layout

export const RouterPage = () => {

  const { ocultarMenu } = useContext(UiContext)
  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh' }}>
        <Sider
          collapsedWidth='0'
          breakpoint='md'
          hidden={ocultarMenu}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <NavLink to='/ingresar'>
                Ingresar
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <NavLink to='/cola'>
                Cola tiquetes
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <NavLink to='/crear'>
                Crear tiquete
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear" element={<CrearTiquete />} />
              <Route path="/escritorio" element={<Escritorio />} />

              <Route path="/*" element={<Navigate to="/ingresar" replace />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  )
}
