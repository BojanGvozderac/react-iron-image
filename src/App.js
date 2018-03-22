import React from 'react';
import image from './iron-image-small.jpg';
import './App.css';
import IronImage from './IronImage/IronImage';

const hdUrl = 'http://3.bp.blogspot.com/-Mcpo7CpcI68/WKBOi_UpsjI/AAAAAAAADgc/UTyUdw3JH2o65SRfjwXbZnqyW3s_ffwzgCHM/s1600/nature-wallpapers-hd.jpg';

const App = (props) => (
  <div className="app">
    <div className="app-iron-image-container">
      <IronImage srcPreload={image} src={hdUrl} />
    </div>
  </div>
);

export default App;
