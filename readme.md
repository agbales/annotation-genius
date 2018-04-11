# Annotation Genius

Add Genius-style annotations to your project!

[![See it in action on Vimeo](https://i.imgur.com/ThjiQ9T.png)](https://vimeo.com/264324724)
Watch example on [Vimeo](https://vimeo.com/264324724).

## Getting Started

Add the style, js library, and jQuery to your project.

```
<link rel="stylesheet" href="ag-style.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="annotation-genius.js"></script>
```

Next, add your own annotation data. The scripts will draw from "id" and "annotation" Example:
```
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
```

Finally, in your HTML, add the Sidebar: 

```
<div id="annotation-sidebar" class="annotation-closed">
  <div class="annotation_sidebar_arrow">
    <svg height="25" width="25">
      <path stroke="#b2d7fe" stroke-width="2" stroke-linecap="round" d="M9.37 21.32L0 10.66 9.37 0l1.5 1.32-8.21 9.34L10.87 20l-1.5 1.32"></path>
    </svg>
  </div>
  <span class="close ">
    <svg width="50" height="25" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="11"
              x2="11" y2="1"
              stroke="black"
              stroke-width="2"/>
        <line x1="1" y1="1"
              x2="11" y2="11"
              stroke="black"
              stroke-width="2"/>
    </svg>
  </span>
  <!-- start content -->
  <br>
  <div class="annotation-box">
    <h3><span class="original"></span></h3>
    <br>
    <span class="annotation"></span>
  </div>
</div>
```

And wrap the text you'd like to annotate with corresponding spans:

```
<span class="ag" id="1">Lorem ipsum dolor sit amet,</span>
<span class="ag" id="2">lectus</span>
etc.
```