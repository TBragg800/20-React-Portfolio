import React from "react";

const Contact = () => (
  <main> 
 {/* Container for main content    */}
      <section className="container myborder bg-transparent rounded mb-5 shadow-lg">
 {/* H1 element to head page  */}
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
                  <h1>Contact</h1>
              </div>
          </section>
 {/* Form section containing contact forms */}
          <section className="row m-5">
            <div className="col-lg-12 float-right shadow-lg p-3 mb-5 bg-white rounded"
            data-aos="zoom-in"
            data-aos-offset="-150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
              <form>
                <div className="form-row">
                  <div className="col">
                    <label for="validationCustom01">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" />
                  </div>
                  <div className="col">
                    <label for="validationCustom02">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label for="exampleInputEmail1" id="emailHelp">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>    
      </section>
    </main>
);

export default Contact;
