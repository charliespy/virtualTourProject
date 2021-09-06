// document.write('<script type="text/javascript" src="new_view_controller.js" ></script>');

$( document ).ready(function() {
    for(var i = 0; i < places_list.length; i++) {
      if (places_list[i].marker == 'True'){
        $("#menu_bar_index").append('<a class="dropdown-item" onclick="switchWindowWithIndex(' + i + ')">' + places_list[i].title + '</a>');
      }
    }
});

function switchWindowWithIndex(gotoIndex) {
    // index=gotoIndex
    index = gotoIndex;
    window.location.href = "new_view.html";
}
