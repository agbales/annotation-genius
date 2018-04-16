'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // Append Sidebar
    const annotationSidebar = document.createElement('div');
          annotationSidebar.setAttribute("id", "annotation-sidebar");
          annotationSidebar.setAttribute("class", "annotation-closed");

    document.getElementsByTagName('body')[0].appendChild(annotationSidebar);

    // Add Sidebar Elements
    const sidebarInnerElements = '<div id="annotation_sidebar_arrow"><svg height="25" width="25"><path stroke="#b2d7fe" stroke-width="2" stroke-linecap="round" d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path></svg></div><span id="close-annotation-sidebar"><svg width="50" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"/><line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"/></svg></span><br><div class="annotation-box"><h3><span class="original"></span></h3><br><span class="annotation"></span></div>'

    const sidebar = document.getElementById('annotation-sidebar');

    sidebar.insertAdjacentHTML( 'beforeend', sidebarInnerElements );

    // Set Sidebar Height
    const sidebarHeight = document.body.scrollHeight + 10 + 'px';
    document.getElementById('annotation-sidebar').style.height = sidebarHeight;

    // ---------------
    // Event listeners
    // ---------------

    // All Annotated Spans
    [].forEach.call(document.querySelectorAll('span.ag'), function(el) {
      el.addEventListener('click', function(e) {

        const spanHeight = e.pageY - 30;
        const arrowTranslate = 'translate(-35px,' + spanHeight + 'px)';

        document.getElementById('annotation_sidebar_arrow').style.transform = arrowTranslate;

        const originalSpanText = el.textContent
        const id = this.id - 1;

        const original = sidebar.getElementsByClassName("original")[0];
        const annotation = sidebar.getElementsByClassName("annotation")[0];

        original.innerHTML = originalSpanText;
        annotation.innerHTML = annotationData[id].annotation;

        sidebar.classList.remove('annotation-closed');
      });

      // Close Sidebar Button
      document.getElementById('close-annotation-sidebar').addEventListener('click', function(){
        sidebar.classList.add('annotation-closed');
      });

      // On Mouseup, Close Sidebar
      document.body.addEventListener('mouseup', function(e) {
        if (e.target !== sidebar && !sidebar.contains(e.target)) {
            sidebar.classList.add('annotation-closed');
        }
      });

    });
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
