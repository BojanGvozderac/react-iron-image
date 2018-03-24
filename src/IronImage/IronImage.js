import React, { Component } from 'react';
import './IronImage.css';

class IronImage extends Component {
  state = {
    fadeInClass: ``,
    placeholderStyle: { backgroundImage: `url(${this.props.placeholder})` },
  };

  imageLoadHandler = () => this.setState({ fadeInClass: 'iron-image--fade-in' });

  render() {
    return (
      <div
        className="iron-image__container"
        style={this.state.placeholderStyle}
      >
        <img
          alt={this.props.alt}
          src={this.props.src}
          className={`iron-image ${this.state.fadeInClass}`}
          style={this.state.imageStyle}
          onLoad={this.imageLoadHandler}
        />
      </div>
    );
  };
}

export default IronImage;
