import React from "react";


function Card(prop) {
  return (
    <>
    <div className="main">

      <div className="cards">
        <div className="card">
          <img src={prop.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category"> A Netflix Orignal series </span>
            <h3 className="card_title"> {prop.title}</h3>
            <p> {prop.name}</p>

            <a href="/" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Card;
