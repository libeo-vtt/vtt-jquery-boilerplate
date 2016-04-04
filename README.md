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

## History

Check [Releases](https://github.com/libeo-vtt/vtt-jquery-boilerplate/releases) for detailed changelog.

