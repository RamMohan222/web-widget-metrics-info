import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// query id selector if not query for class
let js_widget__root__ = document.querySelector('#js_widget__root__');
js_widget__root__ = js_widget__root__ || document.querySelector('.js_widget__root__');
if(js_widget__root__ == null)  {
  js_widget__root__ = document.createElement('div');
  js_widget__root__.id = 'js_widget__root__';
  document.getElementsByTagName('body')[0].appendChild(js_widget__root__);
}

let widgets = document.querySelectorAll("#js_widget__root__");
widgets = widgets.length ? widgets : document.querySelectorAll(".js_widget__root__");
widgets.forEach((Div) => {
  const root = ReactDOM.createRoot(Div);
  root.render(React.createElement(() => <App domElement={Div} />));
});

