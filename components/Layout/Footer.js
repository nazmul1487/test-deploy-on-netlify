import React from 'react'
import Image from 'next/image'
import styles from '/styles/Home.module.css'

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      {/* <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">cd
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section> */}

      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="container text-center text-md-start mt-3">

          <div className="row mt-3">

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h3 className="text-uppercase fw-bold mb-4">
                <span style={{color:'red'}}>Sale</span>xtra Limited
              </h3>
              <p>
                A versatile online platform managed by experienced professionals which is
                serving customers delightfully while maintaining the sustainable growth.
              </p>
              <p className="text-center" style={{background: ''}}>
                  © 2022 Copyright:
                  <a className="text-reset fw-bold" href="https://www.salextra.com.bd/"> <span style={{color:'red'}}>Sale</span>xtra Limited</a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Information
              </h6>
              <p>
                <a href="#" className="text-reset">AboutUs</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Bussiness</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Services</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Career</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                Social links
              </h6>
              <p>
                <a href="#!" className="text-reset">Facebook</a>
              </p>
              <p>
                <a href="#!" className="text-reset">LinkedIn</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Youtube</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase fw-bold mb-4">
                Contact Us
              </h6>
              <p>
                Salextra Limited, Ranks Business Center Level 7 Ka 218/1-2 Pragati Sarani Dhaka 1229
              </p>
              <p className="text-reset fw-bold">
               info@salextrabd.com
              </p>
              <p className="text-reset fw-bold">
                01810008810
              </p>
            </div>

          </div>
        </div>
      </section>
</footer>

  )
}
