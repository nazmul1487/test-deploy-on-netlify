import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const HeaderSliderData = [
  {
    id:1,
    img:'https://www.salextra.com.bd/images/thumbs/001/0017808_E7-Power-Web-Slider-Banner-Desktop-View.jpeg',
    title:'First slide label',
    shortbrief: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    id:2,
    img:'https://www.salextra.com.bd/images/thumbs/001/0017808_E7-Power-Web-Slider-Banner-Desktop-View.jpeg',
    title:'First slide label',
    shortbrief: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    id:3,
    img:'/banner/banner2.jpg',
    title:'First slide label',
    shortbrief: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    id:4,
    img:'https://www.salextra.com.bd/images/thumbs/001/0017808_E7-Power-Web-Slider-Banner-Desktop-View.jpeg',
    title:'First slide label',
    shortbrief: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
]

export default function HeaderSlider() {
  return ( 
    <Carousel controls={false} interval={2000}>
      { HeaderSliderData.map(( data ) => (
      <Carousel.Item key={data.id}>
        <img
          className="d-block w-100"
          src={data.img}
          alt="First slide"
          height={350}
        />
        <Carousel.Caption>
          <h3>{data.title}</h3>
          <p>{data.shortbrief}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.salextra.com.bd/images/thumbs/001/0017808_E7-Power-Web-Slider-Banner-Desktop-View.jpeg"
          alt="Second slide"
          height={350}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {"/banner/banner2.jpg"}
          alt="Third slide"
          height={350}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

