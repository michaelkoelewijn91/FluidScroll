# FluidScroll

[![npm](https://img.shields.io/npm/v/@mkoelewijn/fluidscroll.svg)](https://www.npmjs.com/package/@mkoelewijn/fluidscroll)
[![npm](https://img.shields.io/npm/dt/@mkoelewijn/fluidscroll.svg)](https://www.npmjs.com/package/@mkoelewijn/fluidscroll)
[![GitHub issues](https://img.shields.io/github/issues-raw/michaelkoelewijn/FluidScroll.svg)](https://github.com/michaelkoelewijn/FluidScroll/issues)
![NpmLicense](https://img.shields.io/npm/l/@mkoelewijn/fluidscroll.svg)

**FluidScroll** is a *lightweight*, *modern*, *customizable* and *ease to use* plugin that will enhance the user experience on your websites by overriding the default scroll. 

Based on the following [**StackOverflow answer**](https://stackoverflow.com/a/47206289) by **Manuel Otto**

## How to use
#### Install FluidScroll using a package manager.
```console
yarn add @mkoelewijn/fluidscroll
npm i @mkoelewijn/fluidscroll --save
```

#### Import FluidScroll
```javascript
import FluidScroll from "@mkoelewijn/fluidscroll"
```

#### Usage
```javascript
//Without options - using defaults
let scroll = new FluidScroll();

//With options
let scroll = new FluidScroll({
    speed: 60,
    smoothing: 12
});


//Call to enable smoothness
scroll.init();
```

#### Options
| Key | Value | Default | Description |
|---|---|---|---|
| speed | int | 60 | the amout of pixels to be scrolled per mousewheel step |
| smoothing | int | 12 | the smoothness factor, the higher the value, the more smooth. |
| init | function |  | Call to enable smooth scrolling |
| destroy | function |  | Call to destroy smooth scrolling |
| setPosition | function |  | Use to set a position after a scroll position change triggered by something else (anchor link or custom functionality) |