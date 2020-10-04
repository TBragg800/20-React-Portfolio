import React, { Component } from "react";
import PortfolioCard from "../PortfolioCard/index";
import projects from "../../projects.json";

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (

      <main>    
      
        <section className="container myborder bg-transparent rounded mb-5 shadow-lg">

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
                <h1>Portfolio</h1>
              </div>
          </section>

          <section className="row m-5">
            <div className="col-lg-12 shadow-lg p-1 mb-1 bg-transparent rounded">
                
            {this.state.projects.map(project => (
          <PortfolioCard
            id={project.id}
            key={project.id}

            header1={project.header1}
            description1={project.description1}
            image1={project.image1}
            repository1={project.repository1}
            deploy1={project.deploy1}

            header2={project.header2}
            description2={project.description2}
            image2={project.image2}
            repository2={project.repository2}
            deploy2={project.deploy2}
          />
        ))}

            </div>
          </section>
        </section>
      </main>

    );
  }
};

export default Portfolio;
