import React from 'react'
import { Col, Container, Row, Button, Card } from "react-bootstrap";

export default function ContactUS() {
  return (
    <div>
        <Row className="justify-content-md-center my-5" >
            <Col className="d-flex justify-content-center px-1" md="auto">
              <Card
                style={{
                  width: "27rem",
                  height:'25rem',
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px",
                }}
              >
               <iframe style={{height:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.089256982085!2d90.41928741543232!3d23.815424892205005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaaf04d5276e0752a!2sSalextra%20Limited!5e0!3m2!1sbn!2sbd!4v1649174036713!5m2!1sbn!2sbd"></iframe>   
              </Card>
            </Col>
            <Col className="d-flex justify-content-center px-0" md="auto">
              <Card
                style={{
                  width: "20rem",
                  height:'25rem',
                  textAlign: "center",
                  backgroundColor: "black",
                  color:'white',
                }}
              >
                <Card.Body className='my-5'>
                  <Card.Title>Contact Info</Card.Title>
                  <Card.Text>Salextra Limited, Ranks Business Center Level 7 Ka 218/1-2 Pragati Sarani Dhaka 1229</Card.Text>
                  <Card.Text>01810008810</Card.Text>
                  <Card.Text>Email: info@salextrabd.com</Card.Text>
                </Card.Body> 
              </Card>
            </Col>
        
          </Row>
    </div>
  )
}
