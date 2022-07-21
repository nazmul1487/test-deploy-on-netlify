import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container,Row, Col, Card } from 'react-bootstrap'


export default class Partners extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 8,
      slidesToScroll: 4,
      // centerMode:true,
      autoplay:true,
      
    };
    return (
      <div className="my-5">
          <Row className="justify-content-md-center my-3">
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
              <Card.Title>OUR PARTNERS</Card.Title>    
              </Card>
            </Col>
            </Row>
            
        <Slider {...settings}>
          <div>
          <img src= {"/images/daraz.png"} alt="Third slide" style={{width:'90%', height:'40%',borderRadius:"15px"}} />
          </div>
          <div>
          <img src= {"/images/motorola.png"} alt="Third slide" style={{width:'90%', height:'40%',borderRadius:"15px"}} />
          </div>
          <div>
          <img src= {"/images/G&G.png"} alt="Third slide" style={{width:'90%', height:'40%', borderRadius:"35px"}} />
          </div>
          <div>
          <img src= {"/images/motorola.png"} alt="Third slide" style={{width:'90%', height:'40%'}} />
          </div>
          <div>
          <img src= {"/images/LENOVO.png"} alt="Third slide" style={{width:'90%', height:'40%'}} />
          </div>
          <div>
          <img src= {"/images/oppo.png"} alt="Third slide" style={{width:'90%', height:'40%'}} />
          </div>
          <div>
          <img src= {"/images/G&G.png"} alt="Third slide" style={{width:'90%', height:'40%'}} />
          </div>
          <div>
          <img src= {"/images/daraz.png"} alt="Third slide" style={{width:'90%', height:'40%'}} />
          </div>
          <div>
          <img src= {"/images/G&G.png"} alt="Third slide" style={{width:'90%', height:'40%'}} />
          </div>
        </Slider>
      </div>
    );
  }
}