import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from '../App';

function Totalcard() {
    let {total,items} =useContext(UserContext);
  return <>
        <div className='row card-display'>
                <h3 className='mb-4'>Order Summary</h3>
            <div className="row  justify-content-between d-flex">
                <div className="col-md-12">Total Items:&nbsp;<span><strong>{items}</strong></span></div>
                                                       
            </div>
            <div className="row  justify-content-between d-flex">
                <div className="col-md-5">SUBTOTAL</div>
                
                <div className="col-md-5"><span>&#8377;</span><strong>{total}</strong></div>                                       
            </div>
            <div className="row  justify-content-between d-flex">
                <div className="col-md-5">SHIPPING</div>
                
                <div className="col-md-5">free</div>                                       
            </div>
            <div className="row promo">
                <div className="col-md-12 mb-4">Promo Code</div>
                <input className="mb-4 col-md-10" type="text"></input>
                <Button className="col-md-4 mb-2">Apply</Button>                                    
            </div>
            <div className="row  justify-content-between d-flex">
                <div className="col-md-5">Total</div>
                
                <div className="col-md-5"><span>&#8377;</span><strong>{total}</strong></div>                                       
            </div>
            <div className="row justify-content-center d-flex">
                <div className="col-md-10">
                    <Button className="col-md-10 checkout">Checkout</Button>
                </div>
                                                     
            </div>
        </div>
    
    
  </>
}

export default Totalcard