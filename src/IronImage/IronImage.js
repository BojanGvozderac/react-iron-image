import React, { Component } from 'react';
import './IronImage.css';

class IronImage extends Component {

  constructor(props) {
    super(props);
    this.ironImageHd = null;
  }

  componentDidMount() {
        
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute('style', `background-image: url('${this.props.srcLoaded}')`);
      this.ironImageHd.classList.add('iron-image-fade-in');
    }

  };

  render() {
    return (
      <div className="iron-image-container">
        <div className="iron-image-loaded" ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}></div>
        <div className="iron-image-preload" style={{ backgroundImage: `url('${this.props.srcPreload}')` }}></div>
      </div>
    )
  }

}

export default IronImage;