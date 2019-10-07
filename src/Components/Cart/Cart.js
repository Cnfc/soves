import React from 'react';

import './style.css';

const Cart = (props) => {
  return (
    <div className='container'> 
      
      {props.data.map((item) => (
        <div className="CartItem" key={item.id}>
          <span>{item.price}</span>
          <span>{item.title}</span>
        </div>
      ))}
      
      

    </div>
  )
};

export default Cart;