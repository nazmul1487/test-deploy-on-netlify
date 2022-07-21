import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

export default function job1() {
  return (
    <Container>
        <Row className='my-5'>
            <Col xs={12} md={12} >
            <img src= {"/images/job1.png"} alt="job1" style={{width:'100%', height:'70%'}} />
            </Col>
        </Row>
        </Container>
  )
}
