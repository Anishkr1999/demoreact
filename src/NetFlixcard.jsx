import React from 'react'


// const cssStyle={
//     display: 'inline-flex',
//     // margin: 'auto',

//     // width: '100vw',
//     flexDirection: 'row',
//     justifyItems:'center' 
    
// }

function NetFlixcard (props) {
  return (
     <>
 {/* style={cssStyle} */}
<div className="d-inline-flex mx-4 " >
    <div className="card" style={{width: '24rem'}}>
    
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
   
    </div>
  </>
  )
}
export default NetFlixcard;
