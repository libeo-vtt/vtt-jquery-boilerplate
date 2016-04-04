# VTT jQuery Boilerplate
A jump-start for VTT jQuery plugins development

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="path/to/jquery.MODULENAME_LOWERCASE.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").MODULENAME_LOWERCASE({
		// config
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.MODULENAME_LOWERCASE.js
│   └── jquery.MODULENAME_LOWERCASE.min.js
├── src/
│   └── jquery.MODULENAME_LOWERCASE.js
├── .gitignore
├── bower.json
├── gulpfile.js
└── package.json
```

#### [demo/](./tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](./tree/master/dist)

This is where the generated files are stored once Gulp runs.

#### [src/](./tree/master/src)

Contains the JavaScript files responsible for your plugin.

#### [.gitignore](./tree/master/.gitignore)

List of files that we don't want Git to track.

> Check this [Git Ignoring Files Guide](https://help.github.com/articles/ignoring-files) for more details.

#### [bower.json](./tree/master/gulpfile.js)

Specify all dependencies loaded via Bower.

> Check [bower.io](http://bower.io//) if you haven't heard about this project yet.

#### [gulpfile.js](./tree/master/gulpfile.js)

Contains all automated tasks using Gulp.

> Check [gulpjs.com](http://gulpjs.com/) if you haven't heard about this project yet.

#### [package.json](./tree/master/package.json)

Specify all dependencies loaded via Node.JS.

> Check [NPM](https://npmjs.org/doc/json.html) for more details.

## History

Check [Releases](./releases) for detailed changelog.

