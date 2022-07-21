import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {Container, Col, Row, Card } from 'react-bootstrap'
export default function NewsHeader() {
  return (
    // <Carousel controls={false} indicators={false} interval={2000}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={"/images/team1.jpg"}
    //       alt="First slide"
    //       height={350}
    //     />
    //     <Carousel.Caption>
    //       <h3>News Header</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <div fluid>
     <div 
          style={{
            // backgroundColor: "black",
            position:"relative",
            textAlign: "center",
            color: "white",
            padding: "5% 0% 10% 0%",
            backgroundImage:`url("/banner/banner2.jpg")`,
            
          }}
        >
          <div style={{position:"absolute", height:"100%", width:"100%",top:"0px", background:"rgba(0, 0, 0, 0.8)"}}></div>
          <div style={{position:'relative', zIndex:"10"}}>
            <h3> news of salextra  </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          
        </div>
    </div>
  );
}
