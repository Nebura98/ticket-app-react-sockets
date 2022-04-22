import React, { useContext, useEffect, useState } from 'react'

import { Card, Col, List, Row, Typography, Tag, Divider } from 'antd'

import { getUltimos } from '../helpers/getUltimos'
import { SocketContext } from '../context/SocketContext'
import { useHideMenu } from '../hooks/useHideMenu'

const { Title, Text } = Typography

export const Cola = () => {

  useHideMenu(true)

  const { socket } = useContext(SocketContext)
  const [tiquetes, setTiquetes] = useState([])

  useEffect(() => {
    socket.on('tiquete-asignado', (asignados) => {
      setTiquetes(asignados)
    })

    return () => {
      socket.off('tiquete-asignado')
    }
  }, [socket])

  useEffect(() => {
    getUltimos()
      .then(tiquetes => setTiquetes(tiquetes))
  }, [])



  return (
    <>
      <Title level={1}>
        Atendiendo al cliente
      </Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tiquetes.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color='volcano'>{item.agente}</Tag>,
                    <Tag color='magenta'>Escritorio: {item.escritorio}</Tag>
                  ]}
                >
                  <Title>No. {item.numero}</Title>
                </Card>
                {item.agente}
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider> Historial</Divider>
          <List
            dataSource={tiquetes.slice(3)}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={`Tiquete No. ${item.numero}`}
                  description={
                    <>
                      <Text type='secondary'>En el escritorio: </Text>
                      <Tag color='magenta'>{item.numero}</Tag>3
                      <Text type='secondary'>Agente: </Text>
                      <Tag color='volcano'>{item.agente}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  )
}
