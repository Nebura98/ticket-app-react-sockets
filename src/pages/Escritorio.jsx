import React, { useContext, useState } from 'react'

import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseSquareOutlined, RightOutlined } from '@ant-design/icons'
import { Navigate, useNavigate } from 'react-router-dom'

import { getUsuarioStorage } from '../helpers/getUsuarioStorage'
import { SocketContext } from '../context/SocketContext'
import { useHideMenu } from '../hooks/useHideMenu'


const { Title, Text } = Typography

export const Escritorio = () => {

  const navigate = useNavigate()
  const { socket } = useContext(SocketContext)
  const [tiquete, setTiquete] = useState(null)
  const [usuario] = useState(getUsuarioStorage())

  useHideMenu(false)

  const salir = () => {
    localStorage.clear()
    navigate('/ingresar')
  }

  const siguienteTiquete = () => {
    socket.emit('siguiete-tiquete-trabajar', usuario, (tiquete) => {
      setTiquete(tiquete)
    })
  }

  if (!usuario.agente || !usuario.escritorio) {
    return <Navigate to="/ingresar" />
  }


  return (

    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el estritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align='right'>
          <Button type='danger'
            onClick={salir}>
            <CloseSquareOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {
        tiquete
        &&
        (
          <Row>
            <Col>
              <Text> Esta atendiendo el tiquite número: </Text>
              <Text
                style={{ fontSize: 30 }}
                type='danger'
              >
                {tiquete.numero}
              </Text>
            </Col>
          </Row>
        )
      }
      <Row>
        <Col offset={18} span={6} align='right'>
          <Button
            onClick={siguienteTiquete}
            type='primary'
          >
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}
