import React from 'react';
import {
  Page,
  Layout,
  Card,
  Popover,
  DescriptionList,
  Button,
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

import './index.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 13,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
    };
    this.markerList = [];
  }

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    map.addListener('zoom_changed', () => {
      this.setState({
        zoom: map.getZoom(),
      });
    });

    map.addListener('maptypeid_changed', () => {
      this.setState({
        maptype: map.getMapTypeId(),
      });
    });

    let marker = new window.google.maps.Marker({
      map: map,
      position: {lat: -33.8688, lng: 151.2195},
    });

    new window.google.maps.Marker({
      map: map,
      position: {lat: -33, lng: 152},
    });

    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById('pac-input');
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location,
      });
      this.markerList.push({term: place.formatted_address, description: "Latitude: " + location.lat().toString() + " Longitude: " + location.lng().toString()});

      // document.getElementById("Long").value = this.state.place_location.lng().toString();
      // document.getElementById("Lat").value = this.state.place_location.lat().toString();

      // bring the selected place in view on the map
      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location: location,
      });
    });
  }

  render() {
    return (
      <div id='app'>

      <div id ="righthandside">
      <Page style>
        <Layout sectioned>
          <Card sectioned>
            <DescriptionList
              items={this.markerList}
            />
          </Card>
        </Layout>
      </Page>
      </div>
      <div id="lefthandside">
        <input id="pac-input" class="Polaris-TextField__Input"/>
        <div id='map' />
      </div>
      </div>
    );
}
}
