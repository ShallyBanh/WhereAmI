import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ActionList from '@shopify/polaris';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}


ReactDOM.render(
  <div style={{width: '60%', height: '100%'}}>
    <SimpleMap/>
  </div>,
  document.getElementById('main')
);
