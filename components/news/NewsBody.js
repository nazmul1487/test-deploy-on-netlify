import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";

export default function NewsBody() {
  return (
    <div className="my-5">
      <Row className="justify-content-md-center my-2">

        <Col className="d-flex justify-content-center" md="auto">
          <Card className="my-3" style={{
              width: "21rem",
              height:"25rem",
              color: "black",
              padding: "0px 0px 0px 0px",
              borderRadius: "20px",
              backgroundColor:'whitesmoke'
            }}>
            <Card.Img style={{borderRadius:'10%'}} variant="top" src={"/images/1.png"}/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p><span style={{fontWeight:'bold'}}>Date: </span>20-03-2022</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button style={{bacgrounColor:"red", width:'40%', margin:"0% 0% 5% 30%"}} variant="dark">View Details</Button>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center" md="auto">
          <Card className="my-3" style={{
              width: "21rem",
              height:"25rem",
              color: "black",
              padding: "0px 0px 0px 0px",
              borderRadius: "20px",
              backgroundColor:'whitesmoke'
            }}>
            <Card.Img style={{borderRadius:'10%'}} variant="top" src={"/images/1.png"}/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p><span style={{fontWeight:'bold'}}>Date: </span>20-03-2022</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button style={{bacgrounColor:"red", width:'40%', margin:"0% 0% 5% 30%"}} variant="dark">View Details</Button>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center" md="auto">
          <Card className="my-3" style={{
              width: "21rem",
              height:"25rem",
              color: "black",
              padding: "0px 0px 0px 0px",
              borderRadius: "20px",
              backgroundColor:'whitesmoke'
            }}>
            <Card.Img style={{borderRadius:'10%'}} variant="top" src={"/images/1.png"}/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p><span style={{fontWeight:'bold'}}>Date: </span>20-03-2022</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button style={{bacgrounColor:"red", width:'40%', margin:"0% 0% 5% 30%"}} variant="dark">View Details</Button>
          </Card>
        </Col>
        
      </Row>
      <Row className="justify-content-md-center">

        <Col className="d-flex justify-content-center" md="auto">
          <Card className="my-3" style={{
              width: "21rem",
              height:"25rem",
              color: "black",
              padding: "0px 0px 0px 0px",
              borderRadius: "20px",
              backgroundColor:'whitesmoke'
            }}>
            <Card.Img style={{borderRadius:'10%'}} variant="top" src={"/images/1.png"}/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p><span style={{fontWeight:'bold'}}>Date: </span>20-03-2022</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button style={{bacgrounColor:"red", width:'40%', margin:"0% 0% 5% 30%"}} variant="dark">View Details</Button>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center" md="auto">
          <Card className="my-3" style={{
              width: "21rem",
              height:"25rem",
              color: "black",
              padding: "0px 0px 0px 0px",
              borderRadius: "20px",
              backgroundColor:'whitesmoke'
            }}>
            <Card.Img style={{borderRadius:'10%'}} variant="top" src={"/images/1.png"}/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p><span style={{fontWeight:'bold'}}>Date: </span>20-03-2022</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button style={{bacgrounColor:"red", width:'40%', margin:"0% 0% 5% 30%"}} variant="dark">View Details</Button>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center" md="auto">
          <Card className="my-3" style={{
              width: "21rem",
              height:"25rem",
              color: "black",
              padding: "0px 0px 0px 0px",
              borderRadius: "20px",
              backgroundColor:'whitesmoke'
            }}>
            <Card.Img style={{borderRadius:'10%'}} variant="top" src={"/images/1.png"}/>
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <p><span style={{fontWeight:'bold'}}>Date: </span>20-03-2022</p>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Button style={{bacgrounColor:"red", width:'40%', margin:"0% 0% 10% 30%"}} variant="dark">View Details</Button>
          </Card>
        </Col>
        
      </Row>
    </div>
  );
}
