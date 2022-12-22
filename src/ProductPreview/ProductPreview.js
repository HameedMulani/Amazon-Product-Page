import React from "react";
import classes from './ProductPreview.module.css'; 
const ProductPreview = (props) =>{
    const currentHour = new Date().getHours() > 9 ?  new Date().getHours() : '0' +  new Date().getHours();
    const currentMin = new Date().getMinutes() > 9 ?  new Date().getMinutes() : '0' +  new Date().getMinutes();
    return (
       <div className={classes.PreviewDiv}>
         <img src={props.currentImage} alt="prev"></img>  
            {
              props.showHeartbeatSection ? 
              <div className={classes.PreviewDivHeartRateSection}>
              <i class="fas fa-heartbeat"></i>       
              <p>78</p>
              </div>
              :
              <div className={classes.PreviewFDivTimeSection}>
              <p>{`${currentHour}:${currentMin}`}</p>
              </div>
            }
            

       </div>
    );
}

export default ProductPreview;
