
      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14, 
          center: {lat: 29.991, lng: -95.51394 }, // Global view
        });


    
        
 const pathCoordinates = [
        { lat: 30.01835, lng: -95.48234 },
        { lat: 29.99621, lng: -95.4706 },
        { lat: 29.97781, lng: -95.47373 },
        { lat: 29.95759, lng: -95.5255 },
        { lat: 29.97818, lng: -95.54068 },
        { lat: 29.99052, lng: -95.55175 },
        { lat: 30.0252, lng: -95.48469 },
        { lat: 30.01835, lng: -95.48234 }
      ]; 

const polyline = new google.maps.Polygon({
  paths: pathCoordinates,
  strokeColor: "#4e67f2",
  strokeOpacity: 1,
  strokeWeight: 2,
  fillColor: "#4e67f2",
  fillOpacity: 0.15
});

 polyline.setMap(map);
        
        
        google.maps.event.addListener(
  polyline,
  "click",
  function (event) {
        this.setOptions({
      strokeColor: "#4e67f2", 
      fillOpacity: 0,
    });
      poligonClickEvent(map);
    $('.trd-font.hide').removeClass('hide');
  },
); 
          
google.maps.event.addListener(
  polyline,
  "mouseover",
  function () {
    if(trf==false){
      trf=true;
    this.setOptions({
      fillColor: "#2E8B57",
      strokeColor: "#2E8B57", // Green
      fillOpacity: 0.25,
    });
    }
  },
);

      }// end initmap

var trf = false;
const infoWindow = new google.maps.InfoWindow();
function poligonClickEvent(map){
   const coordinates = [
    { lat: 29.97408, lng: -95.49356 },
    { lat: 29.97504, lng: -95.5133 },
    { lat: 30.01206, lng: -95.4948 },
    { lat: 30.00864, lng: -95.50038 },
    { lat: 30.00485, lng: -95.49463 },
    { lat: 30.00447, lng: -95.50261 },
    { lat: 30.00165, lng: -95.49162 },
    { lat: 29.99927, lng: -95.50253 },
    { lat: 29.99994, lng: -95.50948 },
    { lat: 29.99437, lng: -95.50519 },
    { lat: 29.99006, lng: -95.49545 },
    { lat: 29.99281, lng: -95.51862 },
    { lat: 29.9882, lng: -95.50601 },
    { lat: 29.98203, lng: -95.49837 },
    { lat: 29.9775, lng: -95.5036 },
    { lat: 29.97504, lng: -95.5133 },
    { lat: 29.97408, lng: -95.49356 }
  ];

const iconUrl = 'https://cdn-icons-png.flaticon.com/512/2062/2062582.png';

        const icon = {
  url: iconUrl,
  scaledSize: new google.maps.Size(30, 30), // width, height in pixels
};
  
coordinates.forEach((coord, index) => {
  const marker = new google.maps.Marker({
    position: coord,
    map: map,
    icon: icon,
  });

  marker.addListener('mouseover', () => {
    infoWindow.setContent(`<div style="font-size:14px;FONT-WEIGHT: BOLD;">CAMERA ${index + 1} </div>`);
    infoWindow.open(map, marker);
  });
    marker.addListener('mouseout', () => {
    infoWindow.close(map, marker);
  });
});
};


google.maps.event.addDomListener(window, 'load', initMap); 