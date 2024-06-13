import React,{useContext, useState, useEffect} from 'react'
import ProductCards from './ProductCards';
import { UserContext } from '../App';


function CartItem() {
   
    let {data,setData,setTotal,items,setItem} = useContext(UserContext);

    let [quantity,setQuantity] = useState(0);
    let [removeItem,setRemoveItem] = useState(0);

    //function to remove item using it's ID and update the json
    if(removeItem > 0) {
        let id = removeItem;
        for(let i = 0; i < data.length; i++){
            if(data[i].id == id){
                let index = i;
                let newArray = [...data] // deep copy to acheieve immutability
                newArray.splice(index,1)
                setData(newArray);
                setItem(newArray.length);
            }
        }
    }

    // using useEffect Hook to re-render Total component when quantity of the product changed and when user removes item from the cart
    useEffect(()=>{
        calculateTotal();
    } ,[quantity,data])
  
    //function to calculate the total cost of the products in cart
    function calculateTotal(){
        let subtotal = 0;
        data.forEach((e) => {
            subtotal += e.subtotal;
        });
        setTotal(subtotal);     
    }

    return <>
            <div className='row product-item'>
                <h1>Shopping Cart <span>&#40;{items}&#41;</span></h1>
                <hr></hr>
                {(items==0)?<h2>Your Cart is Empty</h2>:""} 
                {
                    data.map((e,i) =>{
                        return <ProductCards dataItem={e} key={i} setQuantity={setQuantity} setRemoveItem={setRemoveItem}/>
                    })
                }
            </div>
        
    </>
}

export default CartItem