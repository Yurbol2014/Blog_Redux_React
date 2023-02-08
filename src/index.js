import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import App from './App';
import reportWebVitals from './reportWebVitals';


const store = createStore(rootReducer, compose(
   applyMiddleware(
     thunk
   ),
   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
 ));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
