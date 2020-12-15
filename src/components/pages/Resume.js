import React from "react";

const Resume = () => (
  <main>  
 {/* Container for main content   */}
    <section className="container bg-transparent rounded mb-5 shadow-lg">
 {/* H1 element to head page */}
      <section className="row h1bg"
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
          <div className="col row justify-content-center">
            <h1>Resume</h1>
          </div>
      </section>
 {/* iframe containing resume */}
      <section className="row m-5 iframe-container"
        data-aos="zoom-in"
        data-aos-offset="-150"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
          {/* <div>                */}
            <iframe 
            className="col-12 responsive-iframe" 
            src={require("../../images/TBragg3.pdf")}
            title="Resume"
            >
            </iframe>
          {/* </div> */}
      </section>    
    </section>
  </main>
);

export default Resume;
