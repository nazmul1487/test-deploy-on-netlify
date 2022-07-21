import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Image } from "antd";
import "antd/dist/antd.css";

const GalleryData =[
  {
    id:1,
    img:'/images/1.png',
  },
  {
    id:2,
    img:'/images/1.png',
  },
  {
    id:3,
    img:'/images/1.png',
  },
  {
    id:4,
    img:'/images/1.png',
  },
  {
    id:5,
    img:'/images/1.png',
  },
  {
    id:6,
    img:'/images/daraz.png',
  },
  {
    id:7,
    img:'/images/daraz.png',
  },
  {
    id:8,
    img:'/images/daraz.png',
  },
  
]

export default function Gallery() {
  return (
    <div>
        <div className="my-5"
          style={{
            // backgroundColor: "black",
            textAlign: "center",
            // padding: "50px 0px 10px 0px",
            
          }}
        >
          <h3>Happy Moment of <span style={{color:'red'}}>Sale</span>xtra Limited</h3>
        </div>
      <Row className="justify-content-md-center my-5 ">
        { GalleryData.map(( data ) => (
            <Col key={data.id} className="d-flex justify-content-center" md="auto">
              <Card
                style={{
                  width: "20rem",
                  textAlign: "center",
                  color: "black",
                  margin:"0px 0px 10px 0px",
                  borderRadius:"5px"
                }}
              >
                  <Image src={data.img} />
              </Card>
            </Col> 
            ))}
      </Row>
    </div>
  );
}
