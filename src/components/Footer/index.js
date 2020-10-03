import React from "react";


function Footer() {
  return (
    <footer className="fixed-bottom pt-5">
      <nav className="row">
        <section className="col-lg-12 h1bg row justify-content-center pt-2 pb-2">
          <p className="m-1"><i className="far fa-copyright"></i> Copyright</p>
          <a href="https://www.facebook.com/thomas.bragg.5">
              <i className="fab fa-facebook myicon"></i>
          </a>
          <a href="https://www.instagram.com/bragg_thomas/">
              <i className="fab fa-instagram myicon"></i>
          </a>
          <a href="https://www.linkedin.com/in/thomas-bragg-b233851a6/">
              <i className="fab fa-linkedin myicon"></i>
          </a>
          <a href="https://github.com/TBragg800">
              <i className="fab fa-github myicon"></i>
          </a>
          <p className="m-1 ml-2"><i className="fas fa-mobile-alt"></i> 614-638-3797</p>
        </section>
      </nav>
    </footer>
    )
  }

export default Footer;