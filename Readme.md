# Screenshot

Screenshot is CSS only framework that puts your screenshots in the right frame

## Installation

Screenshot is build in SCSS/Sass. To compile it, Install Sass first:

    gem install sass
    sass screenshot.scss screenshot.css

## Usage

Include the screenshot.css in your web project

    <link href="/css/screenshot.css" rel="stylesheet">

Wrap your screenshot in a `div.screenshot`

    <div class="screenshot">
      <img src="screenshot.png">
    </div>

Add the device of your choice as a Classname

    <div class="screenshot notebook">
     <img src="screenshot.png">
    </div>

### Available Devices

- `iphone`- Apple iPhone 5/5S, Portrait Mode
- `ipad` - Apple iPad Air, Portrait Mode
- `nexus` - Generic Android 4" Smartphone
- `notebook` - Generic Notebook
- `browser` - Generic Webbrowser. Add URL as title-attribute to display it in the address bar

### Additional Options

- `outline` - creates an outlined style instead of a Solid one

## Examples

- [http://www.thxalot.co/hash](http://www.thxalot.co/hash)
- [http://johannesippen.com/screenshot](http://johannesippen.com/screenshot)