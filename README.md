# Web widget to show browser memory information.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build:widget` 

Generates two file `index.js` and `index.css` in the `output` directory.

#### Development changes

Update the root element in the `public/index.html`
```html
<div id="js_widget__root__"></div>
```

#### Integration with APP

Add the following content in the root page of your web page. 
```html
<link href="output/index.css" rel="stylesheet" />
<script src="output/index.js"></script>
```

OR

__Build__ CDN to integrate with web pages
```html
<link href="https://cdn.jsdelivr.net/gh/RamMohan222/web-widget-memory-info/output/index.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/RamMohan222/web-widget-memory-info/output/index.js"></script>
```
