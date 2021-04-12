# FluidScroll

**FluidScroll** is a *lightweight*, *modern*, *customizable* and *ease to use* plugin that will enhance the user experience on your websites by overriding the default scroll. 

We, the guys at [**pakt.digital**](https://www.pakt.digital) weren't able to find any good scrollwheel plugins that are up to date to with the latest JS technologies. That's why we decided to make one ourselves using code provided by this [**StackOverflow answer**](https://stackoverflow.com/a/47206289) by **Manuel Otto**

## How to use
#### Install FluidScroll using a package manager.
```console
yarn add @pakt.digital/fluidscroll
npm i @pakt.digital/fluidscroll --save
```

#### Import FluidScroll
```javascript
import FluidScroll from "@pakt.digital/fluidscroll"
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