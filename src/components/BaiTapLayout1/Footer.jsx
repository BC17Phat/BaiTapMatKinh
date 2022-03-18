import React, { Component } from 'react'
import { Card } from "react-bootstrap";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Footer extends Component {
  render() {
    return (

      <Container>

        <Row className="m-0 p-0" >
          <Col className="m-0">
            <img src="./img/promotion_1.png" />
          </Col>
          <Col>
            <img src="./img/promotion_2.png" />
          </Col>
          <Col>
            <img src="./img/promotion_3.jpg" />
          </Col>
        </Row>
      </Container>

    )
  }
}
