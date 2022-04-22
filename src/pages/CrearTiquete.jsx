import React, { useContext, useState } from 'react'

import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloudDownloadOutlined } from '@ant-design/icons'

import { useHideMenu } from '../hooks/useHideMenu'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

export const CrearTiquete = () => {

  useHideMenu(true)

  const { socket } = useContext(SocketContext)
  const [tiquete, setTiquete] = useState(null)

  const nuevoTiquete = () => {
    socket.emit('solicitar-tiquete', null, (tiquete) => {
      setTiquete(tiquete)
    })
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align='center' >
          <Title level={3}>
            Presione el botón para genera un nuevo tiquete
          </Title>
          <Button type='primary' icon={<CloudDownloadOutlined />} size='large' onClick={nuevoTiquete}>
            Nuevo tiquete
          </Button>
        </Col>
      </Row>
      {
        tiquete
        &&
        (
          <Row style={{ marginTop: 100 }}>
            <Col span={14} offset={6} align='center'>
              <Text>
                Su número
              </Text>
              <Divider />

              <Text type='success' style={{ fontSize: 55 }}>
                {tiquete.numero}
              </Text>

            </Col>
          </Row>
        )
      }
    </>
  )
}
