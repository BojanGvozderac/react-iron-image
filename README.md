# React Image Lazy Load Component

A simple React component that takes care of async lazy loading of images with sweet fade in animation - inspired by Polymer [IronImage](https://www.webcomponents.org/element/PolymerElements/iron-image)

## Look at what bad@$$ things you can do with the component
![bad@$$ demo gif](demo.gif)

## How I'd use the component but you do you baby
```javascript
// Dunno what this is but React doesn't work without it... thanks facebook -_-
import React, { Component } from 'react';

// Import these bad boys B-|
import IronImage from 'react-image-lazy-load-component';
import 'react-image-lazy-load-component/build/ironImage.css';

// This is just an example you don't need to actually name it PLACEHOLDER.jpg
import placeholder from './PLACEHOLDER.jpg';

const imgYouWantToShow = `hd.img.url.dot.net`;

class App extends Component {
  render() {
    return (
      // Wrapper div with className="App" because OCD
      <div className="App">
        <IronImage placeholder={placeholder} src={imgYouWantToShow} alt="1998 SEO goes here" />
      </div>
    );
  }
}

export default App;
```

## API

Prop        | Description
--- | --- 
src         | This is the src of the image you want to display 
placeholder | This is the placeholder that you want to show while your image is loading 
alt         | This is the image alt text 

## Wanna read something cool?

There's a neat trick that you can use to create awesome visuals with this component. Just take the image you want to display scale it down to 1% of its width and height and use that as a placeholder. What this does is when the placeholder image is streched to fit the container element it will be pixelated and blurred so when higher quality image is done loading and fades in it will appear as if the blurred image is sharpening into the higher quality image. *Nice!*