import React, { Component } from 'react';
import './IronImage.css';

class IronImage extends Component {
  state = {
    imageLink: '',
    fadeClass: '',
    transitionDuration: this.props.transitionDuration || '1s',
    displayPreload: 'absolute'
  };

  handleImageLoad = () => {
      this.setState({
          imageLink: this.props.src,
          fadeClass: 'iron-image-fade-in',
      });
      setTimeout(() => {
        this.setState({
            displayPreload: 'none'
        });
      }, this.state.transitionDuration);
  };

    render() {
    return (
      <div className="iron-image-container">
        <img
             alt={this.props.alt}
             src={this.props.src}
             className={`iron-image-loaded ${this.state.fadeClass}`}
             style={{
                  transition: `opacity ${this.state.transitionDuration} ease`
             }}
             onLoad={this.handleImageLoad}
        />
        <img
             alt={this.props.alt}
             src={this.props.srcPreload}
             className="iron-image-preload"
             style={{
                 display: this.state.displayPreload
             }}
        />
      </div>
    )
  }
}

export default IronImage;