//GLOBALS
var points = []; //holds the location coordinates 

/**
 * @public
 * Grabs the current and past location coordinates which are stored in a text file.
 */
function getLocationCoordinates(){
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "index.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                points = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
	
}

/**
 * @public
 * Draws the map with all the past and current points. 
 * The current location coordinate marker will be red while the old ones are blue 
 */
function initMap() {
	
	// Grabs all our coordinates
	getLocationCoordinates();
	
    var map;
    var bounds = new google.maps.LatLngBounds();
	var numberOfCoordinates = 0;
	var numberOfCoordinatesInFile = Math.ceil(points.length/2);
	var markerCount = numberOfCoordinatesInFile;
	var iconMarker ="http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
         
    // Display a map on the page
    map = new google.maps.Map(document.getElementById('map'));
	//The location coordinates are stored in pairs the first one in the array is the longitude and the second one is the latitude
	while( numberOfCoordinates <= numberOfCoordinatesInFile){
		markerCount -= 1;
		//The last location point in the array is the current location we are at so we set the marker to red
		if(markerCount == 0){
			iconMarker = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
		}
		
	    var position = new google.maps.LatLng(Number(points[numberOfCoordinates+1]), Number(points[numberOfCoordinates]));
        bounds.extend(position);
		
		var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: iconMarker 
        });
        
        //Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
		//location coordinates are stored in pairs so we have to decrement by 2 
		numberOfCoordinates += 2;
	}

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
	var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(5);
        google.maps.event.removeListener(boundsListener);
    });
}