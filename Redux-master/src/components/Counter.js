import React from "react";
import { connect } from 'react-redux';




const Counter = props =>{

    console.log(props);
    const increment = () => {
      props.dispatch({ type: "INCREMENT" });
    };
   
    const decrement = () => {
      props.dispatch({ type: "DECREMENT" });
    };
   
    return (
      <div style={{marginTop:'5%'}}>
        <h2 style={{color:'red' , fontFamily:'arial' ,fontSize:'50px'}}>Counter</h2>
        <div style={{borderRadius:'9px',backgroundColor:'pink' , marginLeft:'40%',marginRight:'40%' , height:'60px',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <button style={{margin:'auto',width:'50px',height:'25px',borderRadius:'12px' ,border:'0px'}} onClick={() => decrement()}>-</button>
          <span style={{margin:'auto' }} className="count">{props.count}</span>
          <button style={{margin:'auto',width:'50px',height:'25px',borderRadius:'12px' ,border:'0px'}} onClick={() => increment()}>+</button>
        </div>
      </div>
    );
 } ;


 const mapStateToProps = state => {
    console.log(state);
    return {
      count: state.count
    };
   };

export default connect(mapStateToProps)(Counter);
