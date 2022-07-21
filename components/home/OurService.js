import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function OurService() {
  return (
    <>
      {/* <Container fluid>
            <Row>
                    <div style={{backgroundColor:'black', textAlign:'center', color:'white',}}>
                        <h5 className='mt-4'>OurService</h5>
                        <h4>We make it simple, providing best solutions</h4>
                        <div className='mt-5 mb-5'>
                        <Row className="justify-content-md-center mr-2">
                            <Col xs={12} lg="2" style={{backgroundColor:'white', marginLeft:'10px', color:'black'}}>
                                <span>
                                    <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'80%'}} />
                                    <h6>Creative Idea</h6>
                                </span>
                                
                            </Col>
                            <Col xs={12} lg="2" style={{backgroundColor:'white',marginLeft:'10px', color:'black'}}>
                                <span>
                                    <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'80%'}} />
                                    <h6>Creative Idea</h6>
                                </span>    
                            </Col>
                            <Col xs={12} lg="2" style={{backgroundColor:'white', marginLeft:'10px', color:'black'}}>
                                <span>
                                    <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'80%'}} />
                                    <h6>Creative Idea</h6>
                                </span>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mt-4">
                            <Col xs={12} lg="2" style={{backgroundColor:'white', marginLeft:'10px', color:'black'}}>
                                <span>
                                    <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'80%'}} />
                                    <h6>Creative Idea</h6>
                                </span>
                            </Col>
                            <Col xs={12} lg="2" style={{backgroundColor:'white',marginLeft:'10px', color:'black'}}>
                                <span>
                                    <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'80%'}} />
                                    <h6>Creative Idea</h6>
                                </span>    
                            </Col>
                            <Col xs={12} lg="2" style={{backgroundColor:'white', marginLeft:'10px', color:'black'}}>
                                <span>
                                    <img src= {"/images/1.png"} alt="Third slide" style={{width:'90%', height:'80%'}} />
                                    <h6>Creative Idea</h6>
                                </span>
                            </Col>
                        </Row>
                        </div>
                    </div>
            </Row>
        </Container> */}

      <div>
        {/* <Row> */}
        <div
          style={{
            backgroundColor: "black",
            textAlign: "center",
            color: "white",
            padding: "50px 0px 100px 0px",

          }}
        >
          <h5>OurService</h5>
          <h4>We make it simple, providing best solutions</h4>
        </div> 
        <div style={{ position: "relative", bottom:"75px", zIndex:"20", margin:"0 15% 0 15%"}}>
          <Row className="justify-content-md-center">
            <Col className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px"
                }}
              >
                <Card.Img variant="top" src={"/images/1.png"} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px"
                }}
              >
                <Card.Img variant="top" src={"/images/1.png"} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px"
                }}
              >
                <Card.Img variant="top" src={"/images/1.png"} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          {/* </Row>
          <Row className="justify-content-md-center mt-2"> */}
            <Col className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px"
                }}
              >
                <Card.Img variant="top" src={"/images/1.png"} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px"
                }}
              >
                <Card.Img variant="top" src={"/images/1.png"} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px"
                }}
              >
                <Card.Img variant="top" src={"/images/1.png"} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* </Row> */}
      </div>
    </>
  );
}
