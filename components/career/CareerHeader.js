import React from 'react'
import Carousel from "react-bootstrap/Carousel";

export default function CareerHeader() {
  return (
    <Carousel controls={false} indicators={false} interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"/banner/banner2.jpg"}
          alt="First slide"
          height={350}
        />
        <Carousel.Caption>
          <h3>Career label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
