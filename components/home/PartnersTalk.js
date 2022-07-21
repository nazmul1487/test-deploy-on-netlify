import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const PartnersTalkData =[
  {
    id:1,
    img:'/images/1.png',
    title:'Variable width content',
    brief:'The power bank supports 9V2A 18 W HUAWEI Quick Charge input and output, as well as 5V2A, 5V1A and trickle charging, to support fast charging for the Huawei Mate series, P series,and other mainstream mobile phones.',
    name:'Md. Mokkel',
    company:'bong chong center'

  },
  {
    id:2,
    img:'/images/1.png',
    title:'Variable width content',
    brief:'The power bank supports 9V2A 18 W HUAWEI Quick Charge input and output, as well as 5V2A, 5V1A and trickle charging, to support fast charging for the Huawei Mate series, P series,and other mainstream mobile phones.',
    name:'Md. Mokkel',
    company:'bong chong center'

  },

]

export default class PartnersTalk extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   centerMode: true,
      autoplay: true,
    };
    return (
      <div className="my-5">
        <Row className="justify-content-md-center my-5">
          <Col className="d-flex justify-content-center" md="auto">
          <Card
                style={{
                  width: "18rem",
                  textAlign: "center",
                  backgroundColor: "black",
                  height:"auto",
                  borderRadius:'15px',
                  color:'white',
                  padding:"10px 0px 0px 0px"
                }}
              >
              <Card.Title>PARTNERS TALK</Card.Title>    
              </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-5">
          <Slider {...settings}>
          { PartnersTalkData.map(( data ) => (
            <div key={data.id}>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <img
                    src={data.img}
                    alt="Third slide"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                      alignContent: "right",
                    }}
                  />
                </Col>
                <Col className="my-3 mx-3" xs lg="3">
                  <h4>{data.title}</h4>
                  <p>
                    {data.brief}
                  </p>
                  <p><span style={{fontWeight:'bold'}}>{data.name}, </span> {data.company}</p>
                </Col>
              </Row>
            </div>
            ))}
            {/* <div>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <img
                    src={"/images/1.png"}
                    alt="Third slide"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                      alignContent: "right",
                    }}
                  />
                </Col>
                <Col className="my-3 mx-3" xs lg="3">
                  <h4>Variable ontent Variable</h4>
                  <p>
                    The power bank supports 9V2A 18 W HUAWEI Quick Charge input
                    and output, as well as 5V2A, 5V1A and trickle charging, to
                    support fast charging for the Huawei Mate series, P series,
                    and other mainstream mobile phones.
                  </p>
                  <p><span style={{fontWeight:'bold'}}>Md. Mokkel, </span> bong chong center</p>
                </Col>
              </Row>
            </div> */}
          </Slider>
        </Row>
      </div>
    );
  }
}
