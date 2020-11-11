import React, { Component } from 'react'
import anime from 'animejs';
import "./ship.css";


export default class ShipAnimation extends Component {
    animation(){
        let tl = anime.timeline({
            easing: "easeOutExpo",
            duration: 750
          })
		tl.add({
			targets: '.st0, .st1',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'cubicBezier(.5, .05, .1, .3)',
			duration: 750,
			delay: function(el, i) { return i * 750 }
		});
        tl.add({
            targets: '.st0, .st1',
            translateX: ["1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%","1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1%", "1%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%","1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%", "1.5%", "-1.5%"],
            duration: 4000,
            delay: 500
      	})
		tl.add({
			targets: '.st0, .st1',
			translateX: "100%",
			translateY: "-100%",
			duration: 8000
        })
    }
    
    componentDidMount(){
    this.animation()
    }
    render() {
    return (

<svg class="SVG3" width="540px" height="540px" viewBox="0 0 1260 800" fill="none" stroke="white">

      <g id="graphic">
	  <g>
		<path class="st0" d="M363.76,298.14c-9.82-14.98-16.15-32.62-16.41-50.35c-0.21-14.14,15.06-22.53,24.93-30.48
			c10.05-8.09,20.25-15.99,30.62-23.65c42.85-31.65,88.93-59.42,138.7-78.74c26.87-10.43,55.42-19.82,84.59-18.67
			c2.46,0.1,2.77-3.71,0.3-3.81c-26.24-1.11-51.64,6.18-76.1,14.99c-27.65,9.97-54.29,22.63-79.82,37.18
			c-25.07,14.28-49.09,30.35-72.24,47.56c-11.68,8.69-23.15,17.67-34.42,26.88c-8.85,7.23-19.84,13.94-20.47,26.46
			c-1.35,26.83,13.39,56.2,33.45,72.93c0.84,0.7,1.94-0.06,2.14-0.95C372.94,311.85,367.51,305.61,363.76,298.14z"/>
		<path class="st0" d="M462.27,334.2c10.86-9.69,21.53-19.61,31.94-29.79c20.62-20.17,40.25-41.38,58.28-63.91
			c18.36-22.94,35.04-47.26,49.21-73.02c12.53-22.77,23.71-46.72,26.72-72.81c0.28-2.45-3.52-2.74-3.81-0.3
			c-3.43,28.99-17.17,55.72-31.68,80.63c-26.87,46.13-61.51,87.3-99.48,124.67c-9.19,9.05-18.59,17.88-28.15,26.54
			c-9.39,8.51-20.07,22.27-34.01,19.86c-17.87-3.1-34.65-12.48-48.06-24.94c-6.07-5.12-11.73-10.69-16.11-17.23
			c-0.79,0.23-1.46,1.1-0.96,1.93c13.38,22.43,40.08,41.59,66.79,44.45C445.4,351.61,453.74,341.81,462.27,334.2z"/>
		<path class="st0" d="M396.75,333.06c-17.36-13.52-31.27-30.9-42.85-49.43c-0.17-0.26-0.65-0.18-0.57,0.18
			c2.47,10.81,9.69,20.51,16.97,28.63c7.39,8.24,15.59,17.25,25.68,22.16C396.91,335.05,397.48,333.63,396.75,333.06z"/>
		<path class="st0" d="M579.74,198.77c-14.8-9.79-28.47-20.47-40.05-34.02c-5.67-6.63-10.79-13.69-15.33-21.14
			c-4.03-6.63-5.54-12.18-6.39-19.81c-0.01-0.06-0.09-0.09-0.13-0.05c-3.86,3.91-2.22,9.84-0.36,14.4
			c3.42,8.41,9.17,16.32,14.67,23.48c12.24,15.94,27.95,30.36,45.73,39.88C579.71,202.5,581.56,199.97,579.74,198.77z"/>
		<path class="st0" d="M523.84,232.52c6.79-19.74-6.8-44.48-26.28-51.49c-10.53-5.38-23.82-4.47-35.49,1.48
			c-17.7,9.02-26.84,28-21.66,47.35C450.88,269.02,510.57,271.1,523.84,232.52z M461.14,251.35
			c-17.23-10.06-23.83-34.41-13.12-51.51c8.67-13.83,29.83-22.71,46.07-18.19c0.1,0.13,0.22,0.24,0.41,0.32
			c5.64,2.29,11.02,6.76,15.51,11.96c0.21,0.36,0.43,0.7,0.62,1.07c0.08,0.16,0.25,0.18,0.38,0.12c3.3,4.03,6.06,8.41,8,12.55
			c4.73,10.13,3.38,21.67-2.56,30.99C504.98,256.68,479.33,261.97,461.14,251.35z"/>
		<path class="st0" d="M360.79,342.22c-12.32-11.57-22.45-25.36-28.74-41.11c-3-7.52-6.45-17.04-6.47-25.28
			c-0.02-6.51,2.97-7.27,8.17-9.2c3.8-1.41,7.61-2.79,11.35-4.33c0.16,0.61,0.29,1.23,0.46,1.83c0.2,0.72,1.45,1.06,1.65,0.13
			c0.31-1.48,0.55-2.7,0.81-4.2c0.18-1.02-1.02-2.17-2.04-1.85c-5.44,1.69-10.78,3.72-16.11,5.73c-2.9,1.09-6.39,2.03-7.86,5.07
			c-1.36,2.82-0.42,6.83-0.01,9.71c0.78,5.51,2.03,10.93,3.68,16.24c6.03,19.35,17.41,36.64,33.39,49.16
			C360.21,345.02,361.86,343.23,360.79,342.22z"/>
		<path class="st0" d="M339.86,317.71c9.49,13.98,21.53,26.15,36.11,34.82c6.96,4.14,15.82,9.04,23.95,10.35
			c6.43,1.03,7.64-1.8,10.36-6.63c1.99-3.53,3.95-7.08,6.06-10.54c-0.58-0.25-1.17-0.47-1.73-0.74c-0.68-0.31-0.82-1.6,0.13-1.65
			c1.51-0.08,2.76-0.12,4.27-0.15c1.03-0.02,1.98,1.35,1.51,2.31c-2.52,5.11-5.36,10.06-8.18,15.01c-1.53,2.7-3,5.99-6.24,6.97
			c-3,0.91-6.81-0.66-9.6-1.51c-5.32-1.63-10.48-3.72-15.46-6.18c-18.17-8.98-33.46-22.93-43.33-40.67
			C337,317.85,339.03,316.49,339.86,317.71z"/>
		<path class="st0" d="M465.97,145.91c-9.13-3.7-19.8-9.81-29.8-10.45c-9.49-0.6-20.38,4.3-29.24,7.29
			c-22.82,7.71-44.74,18.07-65.21,30.76c-9.52,5.9-18.74,12.29-27.58,19.16c-5.15,4-10.24,8.13-15.09,12.5
			c-1.99,1.79-4.96,3.93-5.27,6.85c-0.85,8.01,13.89,9.56,19.03,10.74c12.74,2.92,25.5,5.76,38.25,8.65
			c2.45,0.55,3.78-3.17,1.3-3.73c-10.2-2.31-20.4-4.61-30.6-6.92c-4.63-1.05-9.3-1.98-13.88-3.22c-1.59-0.43-4.77-0.79-6.09-1.92
			c-5.41-4.64-1.09-6.66,1.67-9.06c15.58-13.54,32.51-25.52,50.46-35.72c17.04-9.68,34.98-17.77,53.52-24.11
			c8.72-2.98,20.62-8.47,30.04-7.07c8.43,1.26,16.96,5.75,25.03,8.94c-1.33,2.08-3.15,4.98-2.7,4.51c-0.22,0.23,0.1,0.62,0.33,0.38
			c-0.76,0.79,5.98-4.05,6.43-4.39C467.78,148.22,467.21,146.41,465.97,145.91z"/>
		<path class="st0" d="M549.78,244.04c2.23,9.6,6.59,21.09,5.66,31.07c-0.89,9.47-7.44,19.46-11.78,27.74
			c-11.19,21.33-24.85,41.36-40.59,59.59c-7.32,8.48-15.07,16.58-23.24,24.24c-4.76,4.46-9.63,8.84-14.71,12.94
			c-2.08,1.68-4.66,4.29-7.59,4.13c-8.05-0.42-7.27-15.21-7.63-20.48c-0.89-13.04-1.7-26.08-2.56-39.13
			c-0.16-2.51,3.72-3.24,3.89-0.7c0.68,10.43,1.36,20.87,2.04,31.3c0.31,4.73,0.5,9.5,1.01,14.21c0.17,1.64,0.03,4.83,0.95,6.32
			c3.73,6.07,6.41,2.12,9.21-0.23c15.82-13.27,30.3-28.12,43.17-44.25c12.22-15.32,23.02-31.77,32.19-49.08
			c4.31-8.14,11.59-19.05,11.68-28.56c0.08-8.52-3.02-17.65-4.91-26.13c-2.27,0.99-5.42,2.33-4.88,1.96
			c-0.27,0.18-0.6-0.2-0.33-0.38c-0.9,0.62,4.94-5.27,5.34-5.66C547.78,241.9,549.47,242.74,549.78,244.04z"/>
		<path class="st0" d="M505.58,241.28c9.82-9.5,12-25.75,5.33-37.62c-5.28-9.4-15.04-14.56-25.13-14.87
			c-12.86-0.9-25.96,4.87-32.44,16.48c-8.01,14.36-1.99,29.97,10.02,40.04C475.11,255.15,495.12,251.4,505.58,241.28z
			 M487.85,247.16c-9.91,2.1-18.7,0.36-25.79-7.18c-6.14-6.53-10.54-14.45-9.47-23.66c1.54-13.27,11.26-20.82,22.69-24.11
			c13.79-3.45,29.92,3,34.94,16.98C516.37,226.38,505.1,243.52,487.85,247.16z"/>
		
        
		<path class="st0" d="M196.1,507.94c8.92-11.81,18.69-22.81,29.3-33.12c1.51-1.46-0.59-3.96-2.13-2.5
			c-8.9,8.39-17.16,17.38-24.83,26.88c10.29-37.26,31.01-70.89,59.9-96.76c1.06-0.95,0.62-2.41-0.56-2.97
			c-10.85-5.21-26.37-2.21-37.68,0.09c-10.41,2.11-20.45,5.52-30.02,10.05c12.17-13.87,24.65-27.53,38.94-39.25
			c16.56-13.57,35.58-23.37,54.57-33.03c1.18-0.6,1.33-2.71-0.16-3.07c-14.94-3.6-30.08-5.18-45.37-4.74
			c19.38-12,40.64-20.34,63.06-24.79c1.63-0.32,1.64-2.42,0.24-3.04c-8.19-3.69-16.38-7.37-24.57-11.06
			c11.95-2.08,23.98-3.19,36.14-3.31c1.7-0.02,2.67-2.16,1.13-3.23c-2.26-1.56-4.51-3.13-6.78-4.69c6.92,1.02,13.2,4.31,18.65,8.99
			c0.85,0.73,1.87-0.6,1.25-1.4c-6.34-8.28-15.93-12.02-26.24-11.6c-1.77,0.07-2.88,2.28-1.2,3.43c2.55,1.75,5.13,3.46,7.72,5.16
			c-12.16,0.53-24.21,2-36.16,4.47c-1.62,0.33-1.64,2.4-0.24,3.03c8.26,3.7,16.5,7.43,24.75,11.15
			c-23.13,5.18-44.94,14.48-64.77,27.55c-1.52,1-0.04,2.93,1.35,2.85c15.35-0.95,30.65,0.21,45.66,3.42
			c-17.86,9.14-35.56,18.66-51.18,31.39c-16.83,13.72-31.18,30.14-45.44,46.44c-1.14,1.3,0.74,3.35,2.18,2.55
			c10.98-6.04,22.62-10.62,34.87-13.34c10.53-2.33,24.79-5.42,35.54-1.76c-30.33,27.94-51.72,64.43-61.06,104.64
			C192.49,508.28,194.82,509.63,196.1,507.94z"/>
		<path class="st0" d="M323.31,464.43c9.58-12.1,19.46-24.22,27.4-37.49c4.88-8.16,7.58-16.44,9.22-25.28
			c1.19,7.95,1.64,15.97,1.3,24.1c-0.06,1.49,1.84,2.72,3.04,1.55c12.34-12.08,20.71-26.97,24.64-43.64
			c1.53,2.53,3.06,5.07,4.61,7.59c0.77,1.26,2.81,1.46,3.34-0.17c1.29-3.97,2.14-8,2.19-12.19c0.04-3.59-2.84-10.67-1.2-13.53
			c0.92-1.6-1.41-3.24-2.41-1.63c-1.76,2.83-0.66,5.18-0.17,8.34c0.73,4.73,0.42,9.38-0.69,13.94c-1.6-2.7-3.21-5.41-4.83-8.1
			c-0.98-1.63-3.2-1.24-3.54,0.64c-2.89,16.09-10.2,30.72-21.19,42.67c0.06-10.48-1.12-20.82-3.56-31.06
			c-0.48-1.99-3.42-1.95-3.63,0.18c-1.41,14.27-4.68,26.22-12.52,38.38c-6.4,9.92-13.63,19.29-20.94,28.56
			c1.36-14.36,0.19-28.72-3.5-42.75c-0.52-1.99-3.2-1.85-3.54,0.18c-3.77,22.77-18.51,40.97-33.47,57.77
			c1.39-14.8,1.06-29.62-0.98-44.37c-0.15-1.09-1.48-1.77-2.45-1.27c-12.43,6.32-23.1,15.1-33.55,24.23
			c-11.19,9.77-22.24,19.7-33.21,29.72c-1.2,1.09,0.39,2.97,1.64,1.92c10.71-9.01,21.34-18.11,31.88-27.32
			c10.25-8.96,20.55-17.77,32.55-24.26c1.93,15.45,1.95,30.94,0.04,46.42c-0.17,1.4,1.86,2.63,2.9,1.48
			c15.02-16.68,30.29-34.28,36.4-56.09c2.58,13.31,2.92,26.82,0.94,40.34C319.74,465.2,322.29,465.72,323.31,464.43z"/>
		<path class="st0" d="M368.46,368.65c2.33-4.39,4.58-8.8,6.71-13.29c0.76-1.61-1.9-2.95-2.8-1.41c-2.46,4.19-4.74,11.26-8.13,14.74
			c-0.33,2.33-1.14,2.75-2.42,1.24c-1.33-0.63-2.2-1.69-2.6-3.18c-1.99-2.83-3.51-6.16-5.23-9.17c-0.68-1.19-2.4-1.52-3.23-0.25
			c-2.69,4.07-4.88,8.33-6.25,13.04c-1.33,4.57-1.52,10.41-4.76,14.09c-0.47-5.17-0.92-10.34-1.46-15.5
			c-0.38-3.64-0.84-6.2-3.68-8.56c-0.82-0.68-2.01-0.22-2.59,0.5c-4.9,6.01-9.69,12.09-14.33,18.29
			c-3.66,4.89-7.02,10.94-11.79,15.02c2.31-6.23,4.47-12.52,6.46-18.86c0.5-1.58-1.08-2.98-2.59-2.34
			c-8.97,3.77-17.83,7.78-26.65,11.87c12.26-11.73,25.6-22.2,40-31.27c1.42-0.89,1.52-2.95-0.19-3.62
			c-6.76-2.67-13.68-4.36-20.79-5.08c10.96-4.27,22.19-7.67,33.72-10.17c1.64-0.35,2.01-2.39,0.72-3.38
			c-7.87-6.02-16.21-11.33-25.06-15.74c7.65-1.45,15.14-1.33,23.11-0.75c0.69,0.05,1.16-0.66,0.89-1.28
			c-0.89-2.04-1.77-4.08-2.66-6.12c-0.01-0.03-0.07-0.02-0.06,0.02c0.26,1.69,1.29,4.11-0.18,4.93c-1.19,0.66-8.38-1.1-9.89-1.12
			c-5.69-0.1-11.29,0.62-16.82,2c-1.81,0.45-1.83,2.63-0.27,3.4c8.99,4.41,17.48,9.41,25.53,15.28c-13.3,3.07-26.23,7.3-38.78,12.7
			c-1.73,0.74-1.31,3.74,0.68,3.73c8.57-0.06,16.84,1.24,24.88,3.94c-16.45,10.75-31.55,23.21-45.17,37.42
			c-1.42,1.48-0.02,4.16,2.05,3.18c10.82-5.08,21.66-10.11,32.65-14.83c-2.21,6.8-4.59,13.53-7.17,20.19
			c-0.6,1.54,1.15,2.99,2.58,2.33c6.8-3.13,10.54-9.34,14.83-15.19c5.12-6.99,10.44-13.84,15.88-20.58
			c1.66,2.98,1.33,8.15,1.6,11.02c0.39,4.18,0.78,8.35,1.17,12.53c0.11,1.14,1.63,1.93,2.63,1.36c4.02-2.33,5.86-5.67,7.1-10.08
			c1.76-6.23,3.07-11.95,6.11-17.53c1.98,3.83,3.93,7.96,6.51,11.19c1.09,1.36,2.07,2.61,4,2.38
			C365.91,375.34,367.26,370.92,368.46,368.65z"/>
	      </g>
        </g>
      </svg>

    )
  }

};