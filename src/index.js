import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import  plotterReducer  from "./store/reducers";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = createStore(
  plotterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>

    <App />
    </DndProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





