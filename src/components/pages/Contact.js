import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      message: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
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
            <div className="col-lg-12 float-right shadow-lg p-3 mb-5 bg-transparent rounded"
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
                    <label for="validationCustom01" className="myp3">Name</label>
                    <input 
                      type="text"
                      name="name"
                      className="form-control" 
                      id="validationCustom01"
                      onChange={this.handleChange} />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label for="exampleInputEmail1" id="emailHelp" className="myp3">Email address</label>
                  <input 
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1" className="myp3">Message</label>
                  <textarea
                  name="message"
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="10"
                  onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </section>    
        </section>
      </main>
    );
  }
};

export default Contact;
