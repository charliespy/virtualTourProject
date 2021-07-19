// initilization 
var index = 0;

$( document ).ready(function() {
    for(var i = 0; i < places_list.length; i++) {
      if (places_list[i].marker == 'True'){
        $("#menu_bar").append('<a class="dropdown-item" onclick="goToNextPlaceWithIndex(' + i + ')">' + places_list[i].title + '</a>');
      }
    }

    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
    $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
    // $("#description2").attr("src", places_list[0].img);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: places_list[index].lat, lng: places_list[index].lng},
        pov: {
          heading: places_list[index].heading,
          pitch: places_list[index].pitch,
        }
      });
    map.setStreetView(panorama);
});

function goToNextPlace() {
  index++;
  if (index < places_list.length) {
    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
    $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: places_list[index].lat, lng: places_list[index].lng},
        pov: {
          heading: places_list[index].heading,
          pitch: places_list[index].pitch,
        }
      });
    map.setStreetView(panorama);
  } else {
    window.location.href = "index.html";
  }
}

function goToLastPlace() {
  if (index!=0){
    index--;
  }
  if (index < places_list.length) {
    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
    $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: places_list[index].lat, lng: places_list[index].lng},
        pov: {
          heading: places_list[index].heading,
          pitch: places_list[index].pitch,
        }
      });
    map.setStreetView(panorama);
  } else {
    window.location.href = "index.html";
  }
}

function initialize() {
  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
      position: {lat: places_list[index].lat, lng: places_list[index].lng},
        pov: {
          heading: places_list[index].heading,
          pitch: places_list[index].pitch,
        }
    });
  map.setStreetView(panorama);
}

function goToNextPlaceWithIndex(gotoIndex) {
  if (index < places_list.length) {
    index = gotoIndex;
    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
    $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: places_list[index].lat, lng: places_list[index].lng},
        pov: {
          heading: places_list[index].heading,
          pitch: places_list[index].pitch,
        }
      });
    map.setStreetView(panorama);
  }  
}