import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => props.handlePageChange("Resume")}
          className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>

    // <header>
    //   <nav className="navbar navbar-expand-lg mynavbar bg-transparent"
    //     data-aos="fade-up"
    //     data-aos-offset="0"
    //     data-aos-delay="50"
    //     data-aos-duration="1000"
    //     data-aos-easing="ease-in-out"
    //     data-aos-mirror="true"
    //     data-aos-once="true"
    //     data-aos-anchor-placement="top-center" >
    //         <a className="navbar-brand" data-toggle="collapse" href="#collapseExample"><h1 className="display-4">Thomas</h1></a>
    //         <a className="nav-link disabled collapse" id="collapseExample" href="#" tabindex="-1" aria-disabled="true"><h1 className="display-4 bg-transparent">Bragg</h1></a>

    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <section className="collapse navbar-collapse visible" id="navbarNav">
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //                 <a className="nav-link navFont" href="index.html">HOME</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link navFont" href="portfolio.html">PORTFOLIO</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link navFont" href="contact.html">CONTACT</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link navFont" href="resume.html">RESUME</a>
    //             </li>
    //           </ul>
    //         </section>
          
    //   </nav>

    // </header>

  );
}

export default NavTabs;
