import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from "react-bootstrap/Carousel";

export default function HeaderBanner() {
  return (
    <Carousel controls={false} indicators={false} interval={2000}>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src={"/images/team1.jpg"}
          alt="First slide"
          height={350}
          style={{objectFit: "cover"}}
        /> */}
        <div className='header-banner'></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
