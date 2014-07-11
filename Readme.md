# Screenshot

Screenshot is CSS only framework that puts your screenshots in the right frame

## Installation

Screenshot is build in SCSS/Sass. To compile it, Install Sass first:

    gem install sass
    sass screenshot.scss screenshot.css

## Usage

1. Include the screenshot.css in your web project

    &lt;link href="/css/screenshot.css" rel="stylesheet"&gt;

2. Wrap your screenshot in a ´div.screenshot´

    &lt;div class="screenshot"&gt;
      &lt;img src="screenshot.png"&gt;
    &lt;/div&gt;

3. Add the device of your choice as a Classname

    &lt;div class="screenshot notebook"&gt;
      &lt;img src="screenshot.png"&gt;
    &lt;/div&gt;


### Available Devices

- ´iphone´- Apple iPhone 5/5S, Portrait Mode
- ´ipad´ - Apple iPad Air, Portrait Mode
- ´nexus´ - Generic Android 4" Smartphone
- ´notebook´ - Generic Notebook
- ´browser´ - Generic Webbrowser. Add URL as title-attribute to display it in the address bar

### Additional Options

- ´outline´ - creates an outlined style instead of a Solid one

## Examples

- [http://www.thxalot.co/hash](http://www.thxalot.co/hash)
- [http://johannesippen.com/screenshot](http://johannesippen.com/screenshot)