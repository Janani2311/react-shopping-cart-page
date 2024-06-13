import React, {useContext} from 'react'
import { UserContext } from '../App';

function Total() {
    let {total} =useContext(UserContext);
  return <>
    <div className="container">
            <div className="row mb-2 justify-content-between d-flex">
                <div className="col-10">SUBTOTAL</div>
                
                <div className="col-2"><span>&#8377;</span><strong>{total}</strong></div>                                       
            </div>
            <div className="row mb-2 justify-content-between d-flex">
                <div className="col-10">SHIPPING</div>
                
                <div className="col-2">Free</div>                                       
            </div>
        </div>  
        <div className="container">
            <div className="row mb-2 justify-content-between d-flex">
                <div className="col-10">TOTAL</div>
                
                <div className="col-2"><span>&#8377;</span><strong>{total}</strong></div>                                       
            </div>
            <div className="row mb-2 ustify-content-between d-flex">
                <div className="col-8"></div>
                
                <div className="col-3 axis-card" style={{color:"red"}}>Get daily cash with Axis cards</div>                                       
            </div>
        </div>
  
  </>
}

export default Total