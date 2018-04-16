# Annotation Genius

[![See it in action on Vimeo](https://i.imgur.com/ThjiQ9T.png)](https://vimeo.com/264324724)

Add Genius-style annotations to your project!

Watch example on [Vimeo](https://vimeo.com/264324724).

## Getting Started

Add the stylesheet & JS to your project:

```
<link rel="stylesheet" href="ag-style.css">
<script src="annotation-genius.js"></script>
```

Wrap the annotated material with spans:

```
<span class="ag" id="1">Lorem ipsum dolor sit amet,</span>
<span class="ag" id="2">lectus</span>
etc.
```

Finally, add your annotation data corresponding to spans.

Annotation-Genius.js draws from the properties "id" and "annotation"

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
