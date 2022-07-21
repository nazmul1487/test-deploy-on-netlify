import React from 'react'
import { Container,Row, Col, Card } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ServiceSub() {
  return (
    <div className='mx-4 my-4'>
          <Row className="justify-content-md-center">
            <Col className="d-flex justify-content-center" md="auto">
            <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  height:"auto",
                  border:'0px'
                }}
              >
                <Card.Body>
                  <Row>
                      <Col xs lg="3">
                      <i className="bi bi-people-fill" style={{fontSize:'40px'}}></i>
                      </Col>
                      <Col>
                        <h6>Creative Team</h6>
                        <p>we have creative team to help you.</p> 
                      </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" md="auto">
            <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  height:"auto",
                  border:'0px'
                }}
              >
                <Card.Body>
                  <Row>
                      <Col xs lg="3">
                      <i className="bi bi-award-fill" style={{fontSize:'40px', color:""}}></i>
                      </Col>
                      <Col>
                        <h6>Best Service</h6>
                        <p>we have creative team to help you.</p> 
                      </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" md="auto">
            <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  height:"auto",
                  border:'0px'
                }}
              >
                <Card.Body>
                  <Row>
                      <Col xs lg="3">
                      <i className="bi bi-headset" style={{fontSize:'40px', color:""}}></i>
                      </Col>
                      <Col>
                        <h6>online Support</h6>
                        <p>we have creative team to help you.</p> 
                      </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
  )
}
