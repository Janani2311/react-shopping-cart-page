import React, {useState, useEffect, useContext} from 'react'
import CartItem from './components/CartItem'
import products from './Data.json'
export const UserContext = React.createContext() //creating the context


function App() {

  return <>
    <div class="wrapper">
      {/* <!--Using UseContext hook to access products data in cartItem component--> */}
    <UserContext.Provider value = {{products}}>
        <CartItem/>
    </UserContext.Provider>
    </div>
  </>
}

export default App