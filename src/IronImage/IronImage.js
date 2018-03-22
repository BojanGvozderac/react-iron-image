import React, { Component } from 'react';
import './IronImage.css';

class IronImage extends Component {

  state = {
    imageLink: '',
    fadeClass: ''
  };


  componentDidMount() {
    const hdLoaderImg = new Image();

    hdLoaderImg.src = this.props.src;

    hdLoaderImg.onload = () => {
      this.setState({
          imageLink: this.props.src,
          fadeClass: 'iron-image-fade-in'
      });
    }

  };

  render() {
    return (
      <div className="iron-image-container">
        <div className={`iron-image-loaded ${this.state.fadeClass}`} style={{
          backgroundImage: `url('${this.state.imageLink}')`
        }}></div>
        <div className="iron-image-preload" style={{ backgroundImage: `url('${this.props.srcPreload}')` }}></div>
      </div>
    )
  }
}

export default IronImage;