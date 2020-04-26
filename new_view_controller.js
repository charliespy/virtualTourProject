// initilization 
var index = 0;

$( document ).ready(function() {
    for(var i = 0; i < places_list.length; i++) {
      $("#menu_bar").append('<a class="dropdown-item" onclick="goToNextSchoolWithIndex(' + i + ')">' + places_list[i].title + '</a>');
    }

    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
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

function goToNextSchoolWithIndex(gotoIndex) {
  if (index < places_list.length) {
    index = gotoIndex;
    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
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