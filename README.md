# VTT jQuery Boilerplate

### A jump-start for VTT jQuery plugins development

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.boilerplate.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").defaultPluginName({
		propertyName: "a custom value"
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.boilerplate.js
│   └── jquery.boilerplate.min.js
├── src/
│   └── jquery.boilerplate.js
├── .gitignore
├── gulpfile.js
└── package.json
```

#### [demo/](https://github.com/libeo-vtt/vtt-jquery-boilerplate/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/libeo-vtt/vtt-jquery-boilerplate/tree/master/dist)

This is where the generated files are stored once Gulp runs.

#### [src/](https://github.com/libeo-vtt/vtt-jquery-boilerplate/tree/master/src)

Contains the JavaScript files responsible for your plugin.

#### [.gitignore](https://github.com/libeo-vtt/vtt-jquery-boilerplate/tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [gulpfile.js](https://github.com/libeo-vtt/vtt-jquery-boilerplate/tree/master/gulpfile.js)

Contains all automated tasks using Gulp.

> Check [gulpjs.com](http://gulpjs.com/) if you haven't heard about this project yet.

#### [package.json](https://github.com/libeo-vtt/vtt-jquery-boilerplate/tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## History

Check [Releases](https://github.com/libeo-vtt/vtt-jquery-boilerplate/releases) for detailed changelog.

