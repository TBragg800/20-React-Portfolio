import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer/index";
import Landing from "./Landing/Landing";

function Container() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/20-React-Portfolio/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default Container;

// import React, { Component } from "react";
// import NavTabs from "./NavTabs";
// import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import Footer from "./Footer/index";
// // import Landing from "./Landing/Landing";

// class Container extends Component {
//   state = {
//     currentPage: "Home"
//   };

//   handlePageChange = page => {
//     this.setState({ currentPage: page });
//   };

//   renderPage = () => {
//     if (this.state.currentPage === "Home") {
//       return <Home />;
//     } else if (this.state.currentPage === "Portfolio") {
//       return <Portfolio />;
//     } else if (this.state.currentPage === "Contact") {
//       return <Contact />;
//     } else if (this.state.currentPage === "Resume") {
//       return <Resume />;
//     } 
//     //   else if (this.state.currentPage === "Landing") {
//     //   return <Landing />;
//     // }
//   };

//   render() {
//     // if (this.state.currentPage === "Landing") {
//     //   return (
//     //     <div>
//     //       <Landing
//     //         currentPage={this.state.currentPage}
//     //         handlePageChange={this.handlePageChange}
//     //       />
//     //       {this.renderPage()}
//     //     </div>
//     //   )
//     // } else {
//       return (
//         <div>
          
//           <NavTabs
//             currentPage={this.state.currentPage}
//             handlePageChange={this.handlePageChange}
//           />
//           {this.renderPage()}
//           <Footer />
//         </div>
//       );
//     // }
//   }
// }

// export default Container;
