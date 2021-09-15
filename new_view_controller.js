// initilization 
var index = 0;

// if (places_list[index].pictures == 'True') {
//   var element = document.getElementById("hiddenA");
//   element.classList.toggle("opacity-0");
// }

$(document).ready(function () {
  for (var i = 0; i < places_list.length; i++) {
    if (places_list[i].marker == 'True') {
      $("#menu_bar").append('<a class="dropdown-item" onclick="goToNextPlaceWithIndex(' + i + ')">' + places_list[i].title + '</a>');
    }
  }
  $("#title").text(places_list[index].title);
  $("#description1").text(places_list[index].description1);
  $("#description2").text(places_list[index].description2);
  $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
});

// function goToNextPlace() {
//   index++;
//   if (index < places_list.length) {
//     $("#title").text(places_list[index].title);
//     $("#description1").text(places_list[index].description1);
//     $("#description2").text(places_list[index].description2);
//     $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
//     const location = { lat: places_list[index].lat, lng: places_list[index].lng };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: location,
//       zoom: 14,
//     });
//     const panorama = new google.maps.StreetViewPanorama(
//       document.getElementById("pano"),
//       {
//         position: { lat: places_list[index].lat, lng: places_list[index].lng },
//         pov: {
//           heading: places_list[index].heading,
//           pitch: places_list[index].pitch,
//         },
//       }
//     );
//     map.setStreetView(panorama);
    
//     panorama.addListener("links_changed", () => {
//       panorama.getLinks().push({
//         description: "Next Place",
//         heading: 50,
//         pano: "CAoSLEFGMVFpcFBPbFJmemRhNWJLQjdKVlpxbVJWTTJKME95VG8tMVhZR2JYT3N0",
//       });
//       console.log(panorama.getPano());
//     });
//   } else {
//     window.location.href = "index.html";
//   }
// }

// function goToLastPlace() {
//   if (index != 0) {
//     index--;
//   }
//   if (index < places_list.length) {
//     $("#title").text(places_list[index].title);
//     $("#description1").text(places_list[index].description1);
//     $("#description2").text(places_list[index].description2);
//     $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
//     const location = { lat: places_list[index].lat, lng: places_list[index].lng };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: location,
//       zoom: 14,
//     });
//     const panorama = new google.maps.StreetViewPanorama(
//       document.getElementById("pano"),
//       {
//         position: { lat: places_list[index].lat, lng: places_list[index].lng },
//         pov: {
//           heading: places_list[index].heading,
//           pitch: places_list[index].pitch,
//         },
//       }
//     );
//     map.setStreetView(panorama);
//   } else {
//     window.location.href = "index.html";
//   }
// }

//Initialize function
function myInitialize() {
  const location = { lat: places_list[index].lat, lng: places_list[index].lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 14,
  });
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: { lat: places_list[index].lat, lng: places_list[index].lng },
      pov: {
        heading: places_list[index].heading,
        pitch: places_list[index].pitch,
      },
    }
  );
  map.setStreetView(panorama);

  // const next = new google.maps.StreetViewPanorama();

  // panorama.setLinks([{heading: 50, pano:'CAoSLEFGMVFpcE5aSXZMbkdITmZ5b2dxeDJFeDFuX0N3dnhSbDk3YmJyZmRRSFll'}]);
  // console.log(panorama.getPano());

  panorama.addListener("links_changed", () => {
    if (panorama.getPano() == 'CAoSLEFGMVFpcFBPbFJmemRhNWJLQjdKVlpxbVJWTTJKME95VG8tMVhZR2JYT3N0') {
      panorama.getLinks().push({
        description: places_list[index].links[0].description,
        heading: places_list[index].links[0].heading,
        pano: places_list[index].links[0].link,
      });
    }
    else if (panorama.getPano() == 'CAoSLEFGMVFpcE8wVVhwT0t6aTg5S1hwenJJb1JOWUQ1c0dnNFpYdEo0RVpBTkt2') {
      panorama.getLinks().push({
        description: places_list[1].links[0].description,
        heading: places_list[1].links[0].heading,
        pano: places_list[1].links[0].link,
      });
    }
    // console.log(panorama.getPano());
  });
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
      position: { lat: places_list[index].lat, lng: places_list[index].lng },
      linksControl: true,
      pov: {
        heading: places_list[index].heading,
        pitch: places_list[index].pitch,
      }
    });
    map.setStreetView(panorama);
  }
}