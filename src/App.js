import React, { Component } from 'react'; 
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/topbar';

class App extends Component {
state = {
  productDetails: ProductData,
  currentImagePos: 0,
  currentFeaturePos:0,
  showHeartbeatSection: false
}
  onColorOptClick = (pos) =>{
  this.setState({currentImagePos: pos});
  }

  onFeatureOptClick = (pos) =>{
    let updatedStateShow = false;
    let updatedStatePos = 0;
    if(pos === 1){
      updatedStateShow = true;
      updatedStatePos = 1;
    }
    this.setState({showHeartbeatSection: updatedStateShow})
    this.setState({currentFeaturePos: updatedStatePos})
  }

  render(){
    return (
      <div className="App">  
          <TopBar /> 
          <div className={classes.MainDiv}>
            <ProductPreview currentImage={this.state.productDetails.colorOptions[this.state.currentImagePos].imageUrl} showHeartbeatSection={this.state.showHeartbeatSection}/>

            <ProductDetails details={this.state.productDetails} onColorOptClick={this.onColorOptClick} currentImagePos={this.state.currentImagePos} onFeatureOptClick={this.onFeatureOptClick} currentFeaturePos={this.state.currentFeaturePos} />
          </div>  
      </div>
    )
  }
 
}

export default App;
