import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_key1q6r', 'template_1dkb9lk', e.target, 'user_mcxe4PpLu0KEGgD69Gq6L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


  return (
      <main> 
    {/* Container for main content    */}
        <section className="container myborder bg-transparent rounded mb-5 shadow-lg">
    {/* H1 element to head page  */}
          <section 
            className="row h1bg"
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

          <section
            className="mt-5 pt-3 pb-4 contactsContainer"
            data-aos="zoom-in"
            data-aos-offset="-150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div className="row d-flex justify-content-around">
              <p className="myp4">GitHub</p>
              <p className="myp4">LinkedIn</p>
            </div>
            <div className="row d-flex justify-content-around">
              <a href="https://github.com/TBragg800">
                <i className="fab fa-github myicon3"></i>
              </a>
              <a href="https://www.linkedin.com/in/thomas-bragg-b233851a6/">
                <i className="fab fa-linkedin myicon3"></i>
              </a>
            </div>

            <div className="pt-3 row d-flex justify-content-around">
              <p className="myp4">Facebook</p>
              <p className="myp4">Instagram</p>
            </div>
            <div className="pt-3 row d-flex justify-content-around">
              <a href="https://www.facebook.com/thomas.bragg.5">
                <i className="fab fa-facebook myicon3"></i>
              </a>
              <a href="https://www.instagram.com/bragg_thomas/">
                <i className="fab fa-instagram myicon3"></i>
              </a>
            </div>
          </section>
    {/* Form section containing contact forms */}
          <section className="row m-5">
            <div 
              className="col-lg-12 float-right shadow-lg p-3 mb-5 bg-transparent rounded"
              data-aos="zoom-in"
              data-aos-offset="-150"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <form 
              // onSubmit={this.handleSubmit}
              onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="col">
                    <label className="myp3">Name</label>
                    <input 
                      type="text"
                      name="name"
                      className="form-control" 
                      id="validationCustom01"
                       />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label id="emailHelp" className="myp3">Email address</label>
                  <input 
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                     />
                </div>
                <div className="form-group mt-2">
                  <label id="subjectHelp" className="myp3">Subject</label>
                  <input 
                    type="subject"
                    name="subject"
                    className="form-control"
                    id="subject"
                    aria-describedby="subject"
                     />
                </div>
                <div className="form-group">
                  <label className="myp3">Message</label>
                  <textarea
                  name="message"
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="10"
                   />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>    
        </section>
      </main>
    );

};

export default Contact;
