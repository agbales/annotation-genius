$( document ).ready(function() {
  var sidebarHeight = $( document ).height();
  $( "div#annotation-sidebar" ).css("height", sidebarHeight);
});

// Event listeners
$( "span.ag" ).click(function(e) {
    var arrowPosition = e.pageY - 30;
    var translateY = '"translateY(100px)"'
    $( "div.annotation_sidebar_arrow" ).css({"transform": "translate(-35px," + arrowPosition + "px)"});

    // need to fix text height for annottions later in the page
    // $( "div.annotation-box" ).css({"margin-top": arrowPosition - wh + "px"});
    var original = $(this).text();
    var id = this.id - 1;
    $( "div#annotation-sidebar" ).find( "span.original" ).html( original );
    $( "div#annotation-sidebar" ).find( "span.annotation" ).html( annotationData[id].annotation);
    $( "div#annotation-sidebar" ).removeClass( "annotation-closed" );
  });

$( "span.close" ).click(function() {
  $( "div#annotation-sidebar" ).addClass( "annotation-closed" );
});

$(document).mouseup(function(e){
  var sidebar = $("#annotation-sidebar");
  if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
      sidebar.addClass( "annotation-closed");
  }
});

// User Data Example
const annotationData = [
  {
    "id": 1,
    "annotation": "The annotation to the first item."
  },
  {
    "id": 2,
    "annotation": "Another annotation, this time for the second item."
  },
  {
    "id": 3,
    "annotation": "Third annotation. Because it accepts HTML, we can add a <a href='https://github.com/agbales/'>link</a>."
  }
]
