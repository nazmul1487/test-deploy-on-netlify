import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
export default function JobSection() {
    useEffect(() => {
        AOS.init({
            duration:1000,
        });
        AOS.refresh();
    });
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <div className="my-3"
        style={{
          textAlign: "center",
          padding: "1% 10% 2% 10%",
        }}
      >
        <h5>Open Positions</h5>
        <p>
          Choose Deloitte, and you’ll enjoy a career that offers so much more.
        </p>
      </div>
      <div style={{ margin:"0 15% 0 15%"}}>
        <Row direction="row" data-aos="zoom-in" className="justify-content-md-center "  style={{backgroundColor:"black", color:'white',}}>
          <Col className="justify-content-md-center mx-3 my-3" xs={12} lg="5">
            <h5>Software Developer</h5>
            <p><span style={{marginRight:"5%"}}><b>Experience:</b> 2+ Year </span><b>Deadline:</b>31/08/2021</p>
          </Col>
          <Col className="justify-content-md-center mt-3" xs lg="3">
            <Button
              style={{
                width: "30%",
                margin: "0% 0% 5% 30%",
              }}
              variant="primary"
            >
              View
            </Button>
          </Col>
        </Row>
        <Row direction="row" data-aos="zoom-out" className="justify-content-md-center mt-3" style={{backgroundColor:"black", color:'white',}}>
          <Col className="justify-content-md-center mx-3 my-3" xs={12} lg="5">
            <h5>Software Developer</h5>
            <p><span style={{marginRight:"5%"}}><b>Experience:</b> 2+ Year </span><b>Deadline:</b>31/08/2021</p>
          </Col>
          <Col className="justify-content-md-center mt-3" xs lg="3">
            <Button
              style={{
                width: "30%",
                margin: "0% 0% 5% 30%",
              }}
              variant="primary"
            >
              View
            </Button>
          </Col>
        </Row>

        
      </div>
    </div>
  );
}
