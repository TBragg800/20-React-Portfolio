import React from "react";

const Resume = () => (
  <main>  
 {/* Container for main content   */}
    <section class="container bg-transparent rounded mb-5 shadow-lg">
 {/* H1 element to head page */}
      <section class="row h1bg"
        data-aos="fade-down"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
          <div class="col row justify-content-center">
            <h1>Resume</h1>
          </div>
      </section>
 {/* iframe containing resume */}
      <section class="row m-5 iframe-container"
        data-aos="zoom-in"
        data-aos-offset="-150"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
          <div>               
            <iframe class="col-12" src="assets/Web-Dev-Res-revised-8-2020.pdf">
            </iframe>
          </div>
      </section>    
    </section>
  </main>
);

export default Resume;
