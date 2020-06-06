// initilization 
var index = 0;

$( document ).ready(function() {
  
    for(var i = 0; i < data["buildings"].length; i++) {
      $("#menu_bar").append('<a class="dropdown-item" onclick="goToNextPlaceWithIndex(' + i + ')">' + data["buildings"][i].title + '</a>');
    }

    $("#title").text(data["buildings"][index].title);
    $("#description1").text(data["buildings"][index].description1);
    $("#description2").text(data["buildings"][index].description2);
    $("#heading").text('Virtual Tour Webb | ' + data["buildings"][index].title);
    // $("#description2").attr("src", data["buildings"][0].img);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: data["buildings"][index].lat, lng: data["buildings"][index].lng},
        pov: {
          heading: data["buildings"][index].heading,
          pitch: data["buildings"][index].pitch,
        }
      });
    map.setStreetView(panorama);
});

function goToNextPlace() {
  index++;
  if (index < data["buildings"].length) {
    $("#title").text(data["buildings"][index].title);
    $("#description1").text(data["buildings"][index].description1);
    $("#description2").text(data["buildings"][index].description2);
    $("#heading").text('Virtual Tour Webb | ' + data["buildings"][index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: data["buildings"][index].lat, lng: data["buildings"][index].lng},
        pov: {
          heading: data["buildings"][index].heading,
          pitch: data["buildings"][index].pitch,
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
      position: {lat: data["buildings"][index].lat, lng: data["buildings"][index].lng},
        pov: {
          heading: data["buildings"][index].heading,
          pitch: data["buildings"][index].pitch,
        }
    });
  map.setStreetView(panorama);
}

function goToNextPlaceWithIndex(gotoIndex) {
  if (index < data["buildings"].length) {
    index = gotoIndex;
    $("#title").text(data["buildings"][index].title);
    $("#description1").text(data["buildings"][index].description1);
    $("#description2").text(data["buildings"][index].description2);
    $("#heading").text('Virtual Tour Webb | ' + data["buildings"][index].title);
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: {lat: data["buildings"][index].lat, lng: data["buildings"][index].lng},
        pov: {
          heading: data["buildings"][index].heading,
          pitch: data["buildings"][index].pitch,
        }
      });
    map.setStreetView(panorama);
  }  
}