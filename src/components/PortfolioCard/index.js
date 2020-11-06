import React from "react";

function PortfolioCard(props) {
  return (
   
    <div className="row port-marg justify-content-around">
    <figure className="col-sm-6 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-transparent">
          <img src={require(`../../images/${props.image1}`)} alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
        </div>
        <div className="flip-card-back">
          <h2>{props.header1}</h2>
          <p>{props.description1}</p>
          <div className="col d-flex justify-content-around">
            <a href={props.repository1}>
              <p className="text-white">Repository</p>
              <i className="fab fa-github myicon2"></i>
            </a>
            <a href={props.deploy1}>
              <p className="text-white">Deployed Site</p>
              <i className="fab fa-github myicon2"></i>
            </a>
          </div>
        </div>
      </div>
    </figure>

    <figure className="col-sm-6 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-transparent">
          <img src={require(`../../images/${props.image2}`)}  alt="..." className="img-fluid img-thumbnail mb-5 shadow-lg" />
        </div>
        <div className="flip-card-back">
          <h2>{props.header2}</h2>
          <p>{props.description2}</p>
          <div className="col d-flex justify-content-around">
            <a href={props.repository2}>
              <p className="text-white">Repository</p>
              <i className="fab fa-github myicon2"></i>
            </a>
            <a href={props.deploy2}>
              <p className="text-white">Deployed Site</p>
              <i className="fab fa-github myicon2"></i>
            </a>
          </div>
        </div>
      </div>
    </figure>
  </div>
   
    );
}

export default PortfolioCard;