import React from "react"
import  ReactDOM  from "react-dom";

// import Card from './Component/Card';
import "./index.css";
// import Sdata from "./Sdata"
//  console.log(Sdata[0].imgsrc)
import NetFlixcard from './NetFlixcard'
// import Sdata from "./Sdata";
import NetFlixdata from "./Component/NetFlixdata"

ReactDOM.render(

  <>
  {/* <h1 className="heading_style">List of top 5 Netfliex. Series in 2020</h1> */}
    {/* <Card
      imgsrc ={Sdata[0].imgsrc}
      title ={Sdata[0].title}
      name ={Sdata[0].name}
 /> 
    <Card
        imgsrc ={Sdata[1].imgsrc}
      title ={Sdata[1].title} / >

      <Card
      imgsrc ={Sdata[2].imgsrc}
      title ={Sdata[2].title} / > */}

     {/* {Sdata.map((val)=>{
        return(
          <Card
            imgsrc ={ val.imgsrc}
            name ={ val.name}
          />)

      })} */}

      {/* ...practice Netflix... */}

      
          {/* <NetFlixcard
          imgsrc = {NetFlixdata[0].imgsrc}
          title = {NetFlixdata[0].title}/> */}
{/*         
        <NetFlixcard
          imgsrc = {NetFlixdata[1].imgsrc}
          title = {NetFlixdata[1].title}/>  */}
       
    { NetFlixdata.map((nCard)=>{
      return(
        
        <NetFlixcard
          imgsrc = {nCard.imgsrc}
          title = {nCard.title}/>
      )

     })
     }
     
     </>
,document.getElementById("root")
)
