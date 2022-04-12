import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



//1. Action
/*
  {type:}
*/

//2. Action Creator
let anil = ()=>{
  return { type:'abc' }
}


//3. Reducer
let rootReducer = (oldState={ fullname:'Abhishek Suthar'},action)=>{
    let newState = oldState;
    switch(action.type){
      case 'abc':
        //alert('Switch');
        newState.fullname = action.name + ' ' + action.surname;
        console.log(newState);
        return newState;
        break;
      case 'def':
        return newState;
        break;
      default:
        return newState;
    }
}


//4. Store

let storeObject = createStore(rootReducer);


/* store.subscribe(()=>{
  console.log(store.getState());
}) */

//console.log(store.getState());
//store.dispatch({ type:'abc',name:'Ritik',surname:'Patidar' });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeObject}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
