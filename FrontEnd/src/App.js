/*global google*/
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
import axios from 'axios';

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
      points: [],
      markerList: [],
    };
    this.markerList = [];
    this.map;
    this.getLocationCoordinates();
  }

  geocodeLatLng(geocoder, map, lat, lon) {
    var latlng = {lat: lat, lng: lon};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          return results[0].formatted_address;
        } else {
          return "";
        }
      } else {
        return "";
      }
    });
  }

  updateMarkers(){
    var bounds = new google.maps.LatLngBounds();
    var geocoder = new google.maps.Geocoder;
    var numberOfCoordinates = 0;
    var oldPointsMarkerIcon ="http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    var currenPointMarkerIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    var point = this.state.points;
    var lastPoint;
    var iconMarker;
    var markerList = [];
    for(var idx =0; idx <this.state.points.length; idx++){

      // Grabs all our coordinates
      var lat = Number( point[idx]["lat"]);
      var lon = Number( point[idx]["lon"]) ;
      var position = new google.maps.LatLng( lat,  lon );


      if(idx == this.state.points.length - 1){
        iconMarker = currenPointMarkerIcon;
        lastPoint = position;
      }
      else{
        iconMarker = oldPointsMarkerIcon;
      }

      new google.maps.Marker({
          position: {lat: lat, lng: lon},
          map: this.map,
          icon: iconMarker
      });

      // var address = this.geocodeLatLng(geocoder, this.map, lat, lon);
      markerList.push({term: "test", description: "Latitude: " + lat.toString() + " Longitude: " + lon.toString()});
    }

    this.setState({markerList: markerList});

    this.map.setCenter(lastPoint);
    this.map.setZoom(11);

  }

  getLocationCoordinates(){
    var points = [];
    axios.get('http://shallywhereami.000webhostapp.com/readFromDB.php')
    .then((response) => {
      var matches = (response.data).split("}")
      for(var coordinateIdx =0; coordinateIdx < matches.length -1; coordinateIdx++){
        var coordinate = matches[coordinateIdx].replace("{", "").replace("\"Lon\":", "").replace("\"Lat\":", "");
        var lnglat = coordinate.split(",");
        lnglat[0] = lnglat[0].replace(/"/g, "");
        lnglat[1] = lnglat[1].replace(/"/g, "");
        points.push({ lon: lnglat[0], lat: lnglat[1]});
      }
      this.setState({points: points}, function() {
        this.updateMarkers();
      });
    });
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.689, lng: -113.254},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    this.map.addListener('zoom_changed', () => {
      this.setState({
        zoom: this.map.getZoom(),
      });
    });

    this.map.addListener('maptypeid_changed', () => {
      this.setState({
        maptype: this.map.getMapTypeId(),
      });
    });


    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById('pac-input');
    this.map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let autoComplete = new google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;

      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location,
      });

//       var geocoder = new google.maps.Geocoder;
// var infowindow = new google.maps.InfoWindow;
//
// document.getElementById('submit').addEventListener('click', function() {
//   geocodeLatLng(geocoder, map, infowindow);
// });
// }


      // document.getElementById("Long").value = this.state.place_location.lng().toString();
      // document.getElementById("Lat").value = this.state.place_location.lat().toString();

      // bring the selected place in view on the map

      this.map.fitBounds(place.geometry.viewport);
      this.map.setCenter(location);

      // marker.setPlace({
      //   placeId: place.place_id,
      //   location: location,
      // });
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
              items={this.state.markerList}
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
