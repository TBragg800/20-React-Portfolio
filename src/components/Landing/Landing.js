import React, { Component } from 'react';
import anime from 'animejs';
import "./LandingStyle.css";
import TextSVG from "../TextAnimation/TextAnimation";
import ShipAnimation from "../ShipAnimation/ShipAnimation"

export default class Landing extends Component {

  animation(){
    let tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 750
      })

      tl.add({
        targets: ".animateDiv",
        width: "100%",
        backgroundColor: "rgb(197, 197, 255)",
        delay: anime.stagger(100)
      })
      tl.add({
        targets: ".animateDiv",
        width: "90%",
        backgroundColor: "rgb(235, 235, 255)",
        delay: anime.stagger(100)
      })
      tl.add({
        targets: ".animateDiv",
        width: "90%",
        opacity: 0,
        delay: anime.stagger(100)
      })
      tl.add({
        targets: ".animateSpan",
        top: "40%",
        opacity: 1,
        duration: 4000
      }, "-=1600")
      tl.add({
        targets: "button",
        // top: "20%",
        opacity: 1,
        duration: 3000
      }, "-=1600")

      // let rotateMe = anime({
      //   targets: "#rotateSection",
      //   scaleY: "2",
      //   scaleX: "2",
      //   translateX: "50%",
      //   rotate: "45deg",
      //   duration: 5000,
      //   autoplay: false
      // })

      // document.querySelector("button").addEventListener("click", (props) => {
      //   rotateMe.play();
      //   props.history.push("/home");
      // })
    }
    
    componentDidMount(){
    this.animation()
    }
    render() {
    return (
      <main id="animateMe" className="fadeMe">
        <div className="animateSpan">
        <TextSVG />
        <ShipAnimation />
        </div>
      
        <section id="rotateSection" className="animateSection">
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
          <div className="animateDiv"></div>
        </section>
      </main>
    )
  }

};