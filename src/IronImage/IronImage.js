import React, { Component } from 'react';
import './IronImage.css';

const IMAGE_FADE_IN_CLASS = `iron-image--fade-in`;

class IronImage extends Component {
  state = {
    imageLoadFinishedClass: ``,
    placeholderStyle: { backgroundImage: `url(${this.props.placeholder})` },
  };

  imageLoadHandler = () => this.setState({ imageLoadFinishedClass: IMAGE_FADE_IN_CLASS });

  render() {
    return (
      <div
        className="iron-image__container"
        style={this.state.placeholderStyle}
      >
        <img
          className={`iron-image ${this.state.imageLoadFinishedClass}`}
          alt={this.props.alt}
          src={this.props.src}
          style={this.state.imageStyle}
          onLoad={this.imageLoadHandler}
        />
      </div>
    );
  };
}

export default IronImage;
