import React from "react";

const Portfolio = () => (
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
            
            <div className="row port-marg justify-content-around">
              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/projectG6.png" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>Project 1 FitG6</h2>
                    <p>A motivational app with a focus on fitness</p>
                    <div className="col d-flex justify-content-around">
                      <a href="https://github.com/TBragg800/project-1-fitG6">
                        <p className="text-white">Repository</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                      <a href="https://tictac2992.github.io/project-1-fitG6/">
                        <p className="text-white">Deployed Site</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </figure>

              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/personalized_festival.gif" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2> Project 2: Personalized Festival</h2>
                    <p>A personalized festival using MySQL, Node, Express, Handlebars and a Sequelize ORM set up in an MVC file structure.</p>
                    <div className="col d-flex justify-content-around">
                      <a href="https://github.com/TBragg800/personalized-festival">
                        <p className="text-white">Repository</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                      <a href="https://serene-sands-67688.herokuapp.com/">
                        <p className="text-white">Deployed Site</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            {/*  */}
            <div className="row port-marg justify-content-around">
              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/Work-Day-Scheduler.png" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>Work-Day-Scheduler</h2>
                    <p>A scheduler using local storage and moment.js</p>
                    <div className="col d-flex justify-content-around">
                      <a href="https://github.com/TBragg800/Week-5-Work-Day-Scheduler">
                        <p className="text-white">Repository</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                      <a href="https://tbragg800.github.io/Week-5-Work-Day-Scheduler/">
                        <p className="text-white">Deployed Site</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </figure>

              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/CodeQuiz.png" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>Code Quiz</h2>
                    <p>A timed code quiz utilizing javascript</p>
                    <div className="col d-flex justify-content-around">
                      <a href="https://github.com/TBragg800/Week-4-Web-APIs-Code-Quiz">
                        <p className="text-white">Repository</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                      <a href="https://tbragg800.github.io/Week-4-Web-APIs-Code-Quiz/">
                        <p className="text-white">Deployed Site</p>
                        <i className="fab fa-github myicon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
            </div>

            <div className="row port-marg justify-content-around">
              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/10-temp-eng-depolyed.png" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>Template-Engine-Employee-Summary</h2>
                    <p>A Template Engine CLI application using Node.js</p>
                    <a href="https://github.com/TBragg800/10-Template-Engine-Employee-Summary">
                      <i className="fab fa-github myicon"></i>
                    </a>
                  </div>
                </div>
              </figure>
              
              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/Eat-Da-Burger.png" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>Burger Logger</h2>
                    <p>This application is a burger logger using MySQL, Node, Express, Handlebars and a homemade ORM.</p>
                    <a href="https://github.com/TBragg800/Burger">
                      <i className="fab fa-github myicon"></i>
                    </a>
                  </div>
                </div>
              </figure>
            </div>

            <div className="row port-marg justify-content-around">
              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/12-MySQL-Employee-Tracker.gif" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>MySQL-Employee-Tracker</h2>
                    <p>Content Management System made available to the users CLI. This application utilizes node.js to inquirer, and MySQL to architect and build a solution for managing a company's employees.</p>
                    <a href="https://github.com/TBragg800/12-MySQL-Employee-Tracker">
                      <i className="fab fa-github myicon"></i>
                    </a>
                  </div>
                </div>
              </figure>

              <figure className="col-sm-6 flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-transparent">
                    <img src="assets/Weather-Dashboard.png" alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
                  </div>
                  <div className="flip-card-back">
                    <h2>Weather-Dashboard</h2>
                    <p>A series of weather forecasts using API calls</p>
                    <a href="https://github.com/TBragg800/Week-6-Server-Side-APIs-Weather-Dashboard">
                      <i className="fab fa-github myicon"></i>
                    </a>
                  </div>
                </div>
              </figure>
            </div>
          
        </div>
      </section>
    </section>
  </main>
);

export default Portfolio;
