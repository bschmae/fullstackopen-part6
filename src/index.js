import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from redux;
import Reducer from './reducer';

const store = createStore(Reducer);

const App = () => {
  
}

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
