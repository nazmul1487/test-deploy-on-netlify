import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Motorola() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode:true,
    autoplay: true,
  };
  return (
    <div >
      <Carousel controls={false} indicators={false} interval={2000}>
        <Carousel.Item>
          {/* <img
            className="d-block w-100"
            src={"/banner/motoBanner.jpeg"}
            alt="First slide"
            height={350}
          /> */}
          <div className='business-banner'></div>
          <Carousel.Caption>
            <h3>Motorla National Partner</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <Row className="justify-content-md-center my-5">
          <Col className="d-flex justify-content-center" md="auto">
            <Card className="business-body"
              // style={{
              //   width: "50rem",
              //   color: "black",
              //   padding: "0px 10px 0px 10px",
              //   border: "0px",
              //   backgroundColor: "",
              // }}
            >
              <p>
                {" "}
                <span >
                  Motorla{" "}
                </span>
                is one of the fastest growing companies in Bangladesh. The
                Company started its journey in 2020 with a view to delivering
                best quality products to customers both online and offline. The
                company offers wide range of Devices in four categories; Phone,
                Phone Accessories, Computer & Accessories, Watch and Consumer
                electronics. Salextra Promises to deliver customers’ desired
                product at their doorstep while it also has offline Distribution
                channel all across the Country.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="my-5">
        <Row className="justify-content-md-center my-5">
          <Col className="d-flex justify-content-center" md="auto">
            <Card className="business-headline"
              // style={{
              //   width: "18rem",
              //   textAlign: "center",
              //   backgroundColor: "black",
              //   height: "auto",
              //   borderRadius: "15px",
              //   color: "white",
              //   padding: "5px 0px 0px 0px",
              // }}
            >
              <Card.Title>products of Motorla</Card.Title>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center my-2">
          <Slider {...settings}>
            <div>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <img className="mx-5"
                    src={"/images/motog10.jpg"}
                    alt="Third slide"
                    style={{
                      width: "70%",
                      height: "80%",
                      borderRadius: "15px",

                    }}
                  />
                </Col>
                <Col className="my-3 mx-3" xs lg="3">
                  <h4>Motorla G10</h4>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Rear CameraSystem:
                    </span>
                    48MP Quad Pixel sensor + 8MPUltra-wide + 2MP Macro Vision + 2MPDepth
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Display:
                    </span>
                    6.5" HD+ Max Vision(20:9)
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Memory/Storage: 
                    </span>
                        4GB +64GB​​
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Rear CameraSystem:
                    </span>
                    48MP Quad Pixel sensor + 8MPUltra-wide + 2MP Macro Vision + 2MPDepth
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Display:
                    </span>
                    6.5" HD+ Max Vision(20:9)
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Memory/Storage: 
                    </span>
                        4GB +64GB​​
                  </p>
                  <Button href="https://www.salextra.com.bd/moto-g10" variant="dark" style={{width:'40%', margin:"0% 0% 5% 20%"}}>Buy Now</Button>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-md-center">
                <Col md="auto">
                <img className="mx-5"
                    src={"/images/motog10.jpg"}
                    alt="Third slide"
                    style={{
                      width: "70%",
                      height: "80%",
                      borderRadius: "15px",
                      alignContent: "right",
                    }}
                  />
                </Col>
                <Col className="my-3 mx-3" xs lg="3">
                  <h4 >Motorla G10</h4>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Rear CameraSystem:
                    </span>
                    48MP Quad Pixel sensor + 8MPUltra-wide + 2MP Macro Vision + 2MPDepth
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Display:
                    </span>
                    6.5" HD+ Max Vision(20:9)
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Memory/Storage: 
                    </span>
                        4GB +64GB​​ 
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Rear CameraSystem:
                    </span>
                    48MP Quad Pixel sensor + 8MPUltra-wide + 2MP Macro Vision + 2MPDepth
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Display:
                    </span>
                    6.5" HD+ Max Vision(20:9)
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Memory/Storage: 
                    </span>
                        4GB +64GB​​
                  </p>
                  <Button href="https://www.salextra.com.bd/moto-g10" variant="dark" style={{width:'40%', margin:"0% 0% 5% 20%"}}>Buy Now</Button>
                </Col>
              </Row>
            </div>
            <div>
              <Row className="justify-content-md-center">
                <Col md="auto">
                <img className="mx-5"
                    src={"/images/motog10.jpg"}
                    alt="Third slide"
                    style={{
                      width: "70%",
                      height: "80%",
                      borderRadius: "15px",
                      alignContent: "right",
                    }}
                  />
                  
                </Col>
                <Col className="my-3 mx-3" xs lg="3">
                  <h4>Motorla G10</h4>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Rear CameraSystem:
                    </span>
                    48MP Quad Pixel sensor + 8MPUltra-wide + 2MP Macro Vision + 2MPDepth
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Display:
                    </span>
                    6.5" HD+ Max Vision(20:9)
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Memory/Storage: 
                    </span>
                        4GB +64GB​​ 
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Rear CameraSystem:
                    </span>
                    48MP Quad Pixel sensor + 8MPUltra-wide + 2MP Macro Vision + 2MPDepth
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Display:
                    </span>
                    6.5" HD+ Max Vision(20:9)
                  </p>
                  <p><span style={{ fontWeight: "bold", marginRight: "10px" }}>Memory/Storage: 
                    </span>
                        4GB +64GB​​
                  </p>
                  <Button href="https://www.salextra.com.bd/moto-g10" variant="dark" style={{width:'40%', margin:"0% 0% 5% 20%"}}>Buy Now</Button>
                </Col>
              </Row>
            </div>
            
          </Slider>
        </Row>
      </div>
    </div>
  );
}
