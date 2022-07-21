import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

export default function AboutUsHome() {
  return (
    <Container>
        <Row>
            <Col xs={12} md={4}>
                <div className='mt-4'>
                    <h6>About Us</h6>
                    <h5>We Make Realtionship Between Business and Professional</h5>
                    <p> <span style={{fontWeight:'bold', color:'#ED2931' }}> salextra</span> 
                        aims at helping Customers experience of International Brands. Salextra Limited also believes in bringing revolution in E-Commerce in
                        terms of providing best quality quality products, fastest Delivery, official warranty and post Purchase Services.
                    </p>
                    <p style={{fontWeight:'bold',}}>
                        <a href={'/about-us'}>More Details >></a>
                    </p>
                </div>
            </Col>
            <Col className='mt-4' xs={12} md={8}>
                <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'70%'}} />   
            </Col>
        </Row>
    </Container>
  )
}
