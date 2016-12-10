# Flag of the United States (a pure CSS experiment)

This is an experiment which I was inspired to do after analyzing a [star pattern](http://lea.verou.me/css3patterns/#stars) by Nicholas Gallagher.

Testing it in different browsers revealed that (as of June 2014) the flag renders beautifully in the latest Firefox Nightly.  WebKit rendering engines (Chrome, Safari, Opera) take a cruder approach to calculating these shapes, and therefore show a number of artifacts: pieces coming apart or overlapping and undesired bleed-through of image tiles at the borders.

Not recommended for production.  Use [SVG](https://commons.wikimedia.org/wiki/File:Flag_of_the_United_States_%28Pantone%29.svg).

## Demo

Live demo: http://codepen.io/tknomad/pen/cKGLf

## Build

```
npm install
gulp
```

## License

MIT