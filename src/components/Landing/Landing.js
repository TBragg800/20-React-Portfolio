// import React, { Component } from 'react';
// import anime from 'animejs';
// import "./LandingStyle.css";

// export default class Landing extends Component {
//     animation(){
//         let tl = anime.timeline({
//             easing: "easeOutExpo",
//             duration: 750
//           })
    
//           tl.add({
//             targets: "section div",
//             width: "100%",
//             backgroundColor: "rgb(197, 197, 255)",
//             delay: anime.stagger(100)
//           })
//           tl.add({
//             targets: "section div",
//             width: "90%",
//             backgroundColor: "rgb(235, 235, 255)",
//             delay: anime.stagger(100)
//           })
//           tl.add({
//             targets: "span",
//             top: "20%",
//             opacity: 1,
//             duration: 4000
//           }, "-=1600")
//           tl.add({
//             targets: "button",
//             // top: "20%",
//             opacity: 1,
//             duration: 3000
//           }, "-=1600")
    
//           let rotateMe = anime({
//             targets: "section",
//             scaleY: "2",
//             scaleX: "2",
//             translateX: "50%",
//             rotate: "45deg",
//             duration: 5000,
//             autoplay: false
//           })

//           let fadeMe = anime({
//             targets: ".fade",
//             opacity: 0,
//             zIndex: -2,
//             duration: 5000,
//             autoplay: false
//           })
    
//           const delay = time => new Promise(resolve => setTimeout(resolve, time));
    
//           document.querySelector("button").addEventListener("click", () => {
//             rotateMe.play();
//             delay(3000).then(() => {
//               fadeMe.play();
              
//             })
//           })
//        }
    
//     componentDidMount(){
//     this.animation()
//     }
//     render(props) {
//     return (
//       <section className="fadeMe">
//         <span>Thomas Bragg</span>
//         <button
//         // className={props.currentPage === "Home" ? "nav-link active navFont" : "nav-link navFont"}
//         onClick={() => props.handlePageChange("Home")}
//         href="#home"
//         >Welcome!</button>
      
//         <article>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </article>
//       </section>
//     )
//     }

// };


import React, { Component } from 'react';
import anime from 'animejs';
import Home from "../pages/Home";
import "./LandingStyle.css";

export default class Landing extends Component {

  animation(){
    let tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 750
      })

      tl.add({
        targets: "section div",
        width: "100%",
        backgroundColor: "rgb(197, 197, 255)",
        delay: anime.stagger(100)
      })
      tl.add({
        targets: "section div",
        width: "90%",
        backgroundColor: "rgb(235, 235, 255)",
        delay: anime.stagger(100)
      })
      tl.add({
        targets: "span",
        top: "20%",
        opacity: 1,
        duration: 4000
      }, "-=1600")
      tl.add({
        targets: "button",
        // top: "20%",
        opacity: 1,
        duration: 3000
      }, "-=1600")

      let rotateMe = anime({
        targets: "section",
        scaleY: "2",
        scaleX: "2",
        translateX: "50%",
        rotate: "45deg",
        duration: 5000,
        autoplay: false
      })

      let fadeMe = anime({
        targets: ".fade",
        opacity: 0,
        zIndex: -2,
        duration: 5000,
        autoplay: false
      })

      const delay = time => new Promise(resolve => setTimeout(resolve, time));

      document.querySelector("button").addEventListener("click", () => {
        rotateMe.play();
        delay(3000).then((props) => {
          fadeMe.play();
          
        })
      })
    }
    
    componentDidMount(){
    this.animation()
    }
    render() {
    return (
      <main className="fadeMe">
        <span>Thomas Bragg</span>
        <button>Welcome!</button>
      
        <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
    )
    }

};