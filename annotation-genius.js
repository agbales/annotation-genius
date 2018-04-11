$( document ).ready(function() {
    const sidebarHeight = $( document ).height();
    $( "div#annotation-sidebar" ).css("height", sidebarHeight);

    const sidebar = '<div class="annotation_sidebar_arrow"><svg height="25" width="25"><path stroke="#b2d7fe" stroke-width="2" stroke-linecap="round" d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path></svg></div><span class="close "><svg width="50" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"/><line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"/></svg></span><br><div class="annotation-box"><h3><span class="original"></span></h3><br><span class="annotation"></span></div>'

    $( "div#annotation-sidebar" ).append(sidebar);
});

// Event listeners
$( "span.ag" ).click(function(e) {
    const arrowPosition = e.pageY - 30;
    $( "div.annotation_sidebar_arrow" ).css({"transform": "translate(-35px," + arrowPosition + "px)"});

    // need to fix text height for annottions later in the page. Perhaps...
    // $( "div.annotation-box" ).css({"margin-top": arrowPosition - wh + "px"});
    const original = $(this).text();
    const id = this.id - 1;
    $( "div#annotation-sidebar" ).find( "span.original" ).html( original );
    $( "div#annotation-sidebar" ).find( "span.annotation" ).html( annotationData[id].annotation);
    $( "div#annotation-sidebar" ).removeClass( "annotation-closed" );
  });

$( "span.close" ).click(function() {
  $( "div#annotation-sidebar" ).addClass( "annotation-closed" );
});

$(document).mouseup(function(e){
  const sidebar = $("#annotation-sidebar");
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
