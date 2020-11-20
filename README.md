# SCSS GRID system

## Description
A basic grid system based on flex properties for easily building grids.

You can freely choose to use html class parameters or entend basic rules into a custom scss class.

```html
<div class="ui-grid from1 m-5 l-10">
  ...something...
</div>
```


```scss
.grid-container{
  /* Extending several scss rules at once */
  @include apply(from1 m-5 l10);
}
```

## Installation
* Clone the repo and run ```yarn run install```
* ```yarn run watch``` command will watch your changes and compile unminified files
* ```yarn run build``` command will compile into minified files