import React  from 'react';


const initialState = { count:0 };

const Reducer =(state=initialState,action) =>{
  console.log('reducer',state,action);
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}


export default Reducer ;