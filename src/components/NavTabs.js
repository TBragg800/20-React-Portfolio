import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();
  
  return (

    <header>
      <nav className="navbar navbar-expand-lg mynavbar bg-transparent"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center" >
            <a className="navbar-brand" data-toggle="collapse" href="#collapseExample"><h1 className="display-4">Thomas</h1></a>
            <a className="nav-link disabled collapse" id="collapseExample" href="#collapsable" tabindex="-1" aria-disabled="true"><h1 className="display-4 bg-transparent">Bragg</h1></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <section className="collapse navbar-collapse visible" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className={location.pathname === "/" ? "nav-link active navFont" : "nav-link navFont"}>
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active navFont" : "nav-link navFont"}>
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active navFont" : "nav-link navFont"}>
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active navFont" : "nav-link navFont"}>
                    RESUME
                  </Link>
                </li>
              </ul>
            </section>
          
      </nav>

    </header>

  );
}

export default NavTabs;


// import React from "react";

// function NavTabs(props) {
//   return (

//     <header>
//       <nav className="navbar navbar-expand-lg mynavbar bg-transparent"
//         data-aos="fade-up"
//         data-aos-offset="0"
//         data-aos-delay="50"
//         data-aos-duration="1000"
//         data-aos-easing="ease-in-out"
//         data-aos-mirror="true"
//         data-aos-once="true"
//         data-aos-anchor-placement="top-center" >
//             <a className="navbar-brand" data-toggle="collapse" href="#collapseExample"><h1 className="display-4">Thomas</h1></a>
//             <a className="nav-link disabled collapse" id="collapseExample" href="#collapsable" tabindex="-1" aria-disabled="true"><h1 className="display-4 bg-transparent">Bragg</h1></a>

//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <section className="collapse navbar-collapse visible" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <a
//                     className={props.currentPage === "Home" ? "nav-link active navFont" : "nav-link navFont"}
//                     onClick={() => props.handlePageChange("Home")}
//                     href="#home">HOME</a>
//                 </li>
//                 <li className="nav-item">
//                     <a
//                     className={props.currentPage === "Portfolio" ? "nav-link active navFont" : "nav-link navFont"}
//                     onClick={() => props.handlePageChange("Portfolio")}
//                     href="#portfolio">PORTFOLIO</a>
//                 </li>
//                 <li className="nav-item">
//                     <a                    className={props.currentPage === "Contact" ? "nav-link active navFont" : "nav-link navFont"}
//                     onClick={() => props.handlePageChange("Contact")} 
//                     href="#contact">CONTACT</a>
//                 </li>
//                 <li className="nav-item">
//                     <a                    className={props.currentPage === "Resume" ? "nav-link active navFont" : "nav-link navFont"}
//                     onClick={() => props.handlePageChange("Resume")} 
//                     href="#resume">RESUME</a>
//                 </li>
//               </ul>
//             </section>
          
//       </nav>

//     </header>

//   );
// }

// export default NavTabs;
