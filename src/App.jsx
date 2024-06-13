import React, {useState, useEffect, useContext} from 'react'
import CartItem from './components/CartItem'
import products from './Data.json'
import Total from './components/Total'
import Totalcard from './components/Totalcard'
export const UserContext = React.createContext() //creating the context



function App() {

  let [data,setData] = useState(products);
  let [total,setTotal] = useState(0);
  let [items,setItem] = useState(data.length);
  
  return <>
    <div className="wrapper">
      {/* <!--Using UseContext hook to access products data in cartItem component--> */}
      
    <UserContext.Provider value = {{data,setData,total,setTotal,items,setItem}}>
      <div className='item-wrapper'>
        <CartItem/>
        <div className='total-card'>
            <Totalcard/>
        </div>       
      </div>
        <div className='total-landscape'>
            <Total/>
        </div>
    </UserContext.Provider>
    </div>
  </>
}

export default App