// initilization 
var index = 0;

// if (places_list[index].pictures == 'True') {
//   var element = document.getElementById("hiddenA");
//   element.classList.toggle("opacity-0");
// }

function goToNextPlace() {
  index++;

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

  console.log('The panoId now is ' + panorama.getPano());
  index = findIndexByPano(panorama.getPano());
  console.log('The index now is ' + index);
}

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
  for (var i = 0; i < places_list.length; i++) {
    if (places_list[i].marker == 'True') {
      $("#menu_bar").append('<a class="dropdown-item" onclick="goToNextPlaceWithIndex(' + i + ')">' + places_list[i].title + '</a>');
    }
  }

  $("#title").text(places_list[index].title);
  $("#description1").text(places_list[index].description1);
  // $("#description2").text(places_list[index].description2);
  $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);

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

  panorama.addListener("links_changed", () => {
    console.log("--------------------------------------");
    console.log('The panoId now is ' + panorama.getPano());
    index = findIndexByPano(panorama.getPano());
    console.log('The index now is ' + index);

    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);

    if (places_list[index].links != undefined) {
      for (let i = 0; i < places_list[index].links.length; i++) {
        panorama.getLinks().push({
          description: places_list[index].links[i].description,
          heading: places_list[index].links[i].heading,
          pano: places_list[index].links[i].link,
        });
        // console.log(index);
        // console.log(findIndexByPano(places_list[index].links[i].link));
      }
    }
  });
}

function findIndexByPano(panoId) {
  if (panoId != null) {
    for (let i = 0; i < places_list.length; i++) {
      if (places_list[i].pano == panoId) {
        return i;
      }
    }
    return 'index is a number'
  }
}

function goToNextPlaceWithIndex(gotoIndex) {
  if (index < places_list.length) {
    index = gotoIndex;
    $("#title").text(places_list[index].title);
    $("#description1").text(places_list[index].description1);
    $("#description2").text(places_list[index].description2);
    $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);
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

    // panorama.addListener("links_changed", () => {
    //   console.log('The panoId now is ' + panorama.getPano());
    //   index = findIndexByPano(panorama.getPano());
    //   console.log('The index now is ' + index);

    //   $("#title").text(places_list[index].title);
    //   $("#description1").text(places_list[index].description1);
    //   $("#heading").text('Virtual Tour Webb | ' + places_list[index].title);

    //   if (places_list[index].links != undefined){
    //     for (let i = 0; i < places_list[index].links.length; i++) {
    //       panorama.getLinks().push({
    //         description: places_list[index].links[i].description,
    //         heading: places_list[index].links[i].heading,
    //         pano: places_list[index].links[i].link,
    //       });
    //       // console.log(index);
    //       // console.log(findIndexByPano(places_list[index].links[i].link));
    //     }
    //   }
    // });
  }
}