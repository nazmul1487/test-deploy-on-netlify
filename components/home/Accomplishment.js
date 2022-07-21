import { React, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import AutoCounter from "./AutoCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';

// const AccomplishmentData = [
//   {
//     id: 1,
//     number: "500",
//     title: "Happy Customer",
//   },
//   {
//     id: 2,
//     number: "500",
//     title: "Complete Delivery",
//   },
//   {
//     id: 3,
//     number: "500",
//     title: "Brands",
//   },
//   {
//     id: 4,
//     number: "500",
//     title: "Ecommerce Partners",
//   },
// ];

const AccomplishmentData = require("../../JsonData/DB.json")

export default function Accomplishment() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  });
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          textAlign: "center",
          color: "white",
          padding: "15px 0px 0px 0px"
        }}
      >
        <Row
          justifyContent="space-evenly"
          alignItems="center"
          data-aos="zoom-in"
          className="justify-content-md-center mx-5"
        >
          {/* <Col className="d-flex justify-content-center" md="auto">
            <Row>
              <Col>
                <h6>5000+</h6>
                <p>Happy Customer</p>
              </Col>
            </Row>
          </Col> */}
          {AccomplishmentData.AccomplishmentData.map((data, index) => (
            <Card
              key={index}
              style={{
                width: "18rem",
                textAlign: "center",
                color: "black",
                height: "auto",
                borderRadius: "30px",
                margin: "0px 20px 10px 0px",
              }}
            >
              <Card.Body>
                <Row>
                  <Col>
                    <h4> <span> <CountUp start={0} end={data.number} delay={1}>
                    </CountUp>+</span></h4>
                    <p>{data.title}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
          {/* <Card
            style={{
              width: "18rem",
              textAlign: "center",
              color: "black",
              height: "auto",
              borderRadius: "30px",
              margin: "0px 20px 10px 0px",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <h6>10000+</h6>
                  <p>Complete Delivery</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              textAlign: "center",
              color: "black",
              height: "auto",
              borderRadius: "30px",
              margin: "0px 20px 10px 0px",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <h6>70+</h6>
                  <p>Brands</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              textAlign: "center",
              color: "black",
              height: "auto",
              borderRadius: "30px",
              margin: "0px 20px 10px 0px",
            }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <h6><AutoCounter /></h6>
                  <p>Ecommerce Partners</p>
                </Col>
              </Row>
            </Card.Body>
          </Card> */}
        </Row>
      </div>
    </>
  );
}
