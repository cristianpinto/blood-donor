import React from 'react';
import ReactDOM from 'react/react-dom';
import Map from 'esri/Map';

import MapView from 'esri/views/MapView';
import Zoom from 'app/components/zoom';
import Attribution from 'app/components/attribution';
import BasemapToggle from 'app/components/basemaptoggle';
import 'dojo/domReady!';

const map = new Map({ basemap: 'streets'});

const view = new MapView({
  container: document.getElementById('viewDiv'),
  map,
  center: [-100.33, 25.69],
  zoom: 8
});

ReactDOM.render(
  <div>
    <BasemapToggle view={view} secondaryBasemap={'dark-gray'}/>
  </div>,
  document.getElementById('appDiv')
);
