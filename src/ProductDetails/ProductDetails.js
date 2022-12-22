import React from "react";
import classes from './ProductDetails.module.css';


const ProductDetails = (props) => {
   
const colorOption = props.details.colorOptions.map((item,pos) =>{
    const classArr = [classes.images]
        if (pos=== props.currentImagePos) {
            classArr.push(classes.SelectedImages);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptClick(pos)}/>
        )
})
const features = props.details.featureList.map((item,pos) => {
        const classArr = [classes.FeatureItem]
        if (pos === props.currentFeaturePos) {
            classArr.push(classes.SelectedItem);
        }
        return(
            <button onClick={()=>props.onFeatureOptClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        )
})

return(
        <div className={classes.ProductDiv}>
            <h1 className={classes.ProductTitle}>{props.details.title}</h1>
            <p className={classes.ProductDesc}>{props.details.description}</p>
            <h3 className={classes.SelectHeading}>Select Color</h3>
            <div>
            {colorOption}
            </div>
            <h3 className={classes.SelectHeading}>Features</h3>
            {features}
            <button  className={classes.BuyBtn}>Buy Now</button>
          </div>
    );
}

export default ProductDetails;