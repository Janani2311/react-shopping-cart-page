import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ProductCards({dataItem,setRemoveItem,setQuantity}) {
    let items= [1,2,3,4,5];

  // function to set the subtotal of every item when user changes the quantity of the product
    function handleChange(value,id){
        let itemSubtotal = dataItem.price*value;
        dataItem.subtotal = itemSubtotal;
        setQuantity(value);
    }

    // function to set the id of the product in removeItem useState hook which is to be removed
    function handleDelete(id){
        setRemoveItem(id);
        
    }

  return <>
        <section>
            {/*<!--Html code to display cart products as list-->*/}
                <div className="row align-items-center d-flex">
                    <div className="col-8 row align-items-center d-flex product">
                        <div className="col-2"><img className="product-image" src={dataItem.images} alt={dataItem.title} /></div>
                        
                        <div className="col-7 description">
                            
                            <h3 className="product-title fw-bolder">{dataItem.title}</h3>
                            
                            <p>{dataItem.description}</p>
                        </div>    
                    </div>
                    <div className='col-4'>
                        
                        <div className='row d-flex dropdown'>
                            <div className='col-9 item-input'>
                                <Form.Select onChange={(event) => handleChange(event.target.value, dataItem.id)}>
                                    {items.map((e,i) => {
                                    return <option key={i} value={e}>{e}</option>
                                    })}
                                </Form.Select>
                            </div>
                            <div className="col-3">
                                <span>&#8377;</span><span>{dataItem.price}</span>
                            </div>
                        </div> 
                        {/* Remove button to remove item from shopping cart */}
                        <div className="col-2 remove">
                            <Button variant="link" style={{color:"red"}} onClick={()=>handleDelete(dataItem.id)}>Remove</Button></div>  
                    </div>                       

                </div>
            
            <hr/>
        </section>
  
  
  </>
}

export default ProductCards