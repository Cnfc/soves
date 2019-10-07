import React from 'react';

import './style.css';

const Cart = (props) => {
  return (
    <div className='container'> 
      
      {props.products.map(({ price, title, id, image, category }) => (
        <div className="CartItem" key={id}>
        
          <img src={image} alr={`${image}, ${id}`} />
          <span> { title } </span>
          <span> Price: { price } </span>
          <span> Category: { category.title }</span>
        </div>
      ))}
      

      
      

    </div>
  )
};

export default Cart;