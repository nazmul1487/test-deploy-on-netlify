import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import '/styles/about/aboutStyle.css'

export default function AboutusBody() {
  return (
    <div>
      {/* <Row> */}
      <div className="aboutHead">
        <h1>
          {" "}
          <span> Corporate</span> Profile
        </h1>
      </div>
      <div className="aboutBody">
        <Row className="justify-content-md-center">
          <Col className="d-flex justify-content-center" md="auto">
            <Card className="about-body-card"
              // style={{
              //   width: "50rem",
              //   color: "black",
              //   padding: "0px 10px 0px 10px",
              //   border: "0px",
              // }}
            >
              <p>
                {" "}
                <span>
                  Salextra{" "}
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
              <p>
                The Company works with multiple global brands. Salextra is the
                National partner of Motorola Smartphone, Motorola Lifestyle
                product and Motorola Consumer electronics. The Company is also
                the National Partner of Lenovo Tablet, National Partner of
                Amazefit, Online Distributor of Tecno Mobile and Tecno
                Accessories B2B & E-Commerce, Online Partner of OPPO B2B &
                E-Commerce and National Partner of Oraimo B2B & E-Commerce.
              </p>
              <p>
                The Company aims at helping Customers experience of
                International Brands. Salextra Limited also believes in bringing
                revolution in E-Commerce in terms of providing best quality
                quality products, fastest Delivery, official warranty and post
                Purchase Services.
              </p>
            </Card>
          </Col>
        </Row>
      </div>

      {/* </Row> */}
    </div>
  );
}
