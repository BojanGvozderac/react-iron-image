import React, { Component } from 'react';
import './IronImage.css';

class IronImage extends Component {
  state = {
    imageLink: '',
    fadeClass: ''
  };

  handleImageLoad = () => {
      this.setState({
          imageLink: this.props.src,
          fadeClass: 'iron-image-fade-in'
      });
  };

  render() {
    return (
      <div className="iron-image-container">
        <img alt={this.props.alt}
             src={this.props.src}
             className={`iron-image-loaded ${this.state.fadeClass}`}
             onLoad={this.handleImageLoad}
        />
        <img alt={this.props.alt}
             src={this.props.srcPreload}
             className="iron-image-preload" />
      </div>
    )
  }
}

export default IronImage;