import React  from 'react';
import Counter from './components/Counter'
import { createStore , applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import Reducer from './Reducer'



const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
 }

const store = createStore(Reducer,applyMiddleware(logger));


store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });



function App() {

  return (<div style={{textAlign:'center'}}>

      <Provider store={store}>
  
         <Counter/>
      </Provider>
     </div>
    );
     
   }



export default App;
