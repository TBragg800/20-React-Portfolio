import React from "react";

const Home = () => (
  <main>    
 {/* Container for main content  */}
        <section className="container bg-transparent rounded mb-5">
{/* H1 element to head page  */}
            <div className="row h1bg"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
                <div className="col row justify-content-center">
                    <h1>About Me</h1>
                </div>
            </div>
{/* Div containing figure, carousel and description  */}
            <div className="row m-5"
            data-aos="zoom-in"
            data-aos-offset="-150"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
                <figure className="col-sm-4 mb-3">
                    <img src="redshirt2.JPG" className="mycol rounded-pill shadow-lg mycenter" alt="Thomas in red shirt" />
                </figure>

                <article className="col-lg-8 float-right shadow-lg p-3 mb-5 bg-white rounded">
{/* Div for carousel */}
                    <div className="row m-3 justify-content-center">  
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h4 className="myp1 shadow-lg">I am a Musician...</h4>
                            </div>
                            <div className="carousel-item">
                                <h4 className="myp1 shadow-lg">I am a Bartender...</h4>
                            </div>
                            <div className="carousel-item">
                                <h4 className="myp1 shadow-lg">& a Full Stack Developer!</h4>
                            </div>
                            </div>
                        </div>
                    </div>
{/* Div for description */}
                    <div className="row m-3"> 
                        <p className="myp2">Hi, Thomas here, and I am a <span className="myp3">FULL STACK DEVELOPER!!</span> I live in Nashville, 
                            Tenneessee and currently attend The Vanderbilt University Full Stack Flex Program. I'm new to 
                            the web design community but feel like I am in a great time and place for evolving and challenging
                            myself. I love the logic and structure of coding and strive to utlize HTML, CSS and Java Scripts 
                            to make elegant and efficient code. I love traveling, the arts, comedy, I'm very easy to get into a 
                            conversation about dogs or music and I will always take the opportunity to learn something new.
                        </p>
                    </div>

                </article>
            
            </div>
        
        </section>
    
    </main>
);

export default Home;
