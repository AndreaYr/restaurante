import React from 'react';

const CartItem = ({data, delFromCart}) => {
  let {id, img, title, desc, price, quantity} = data;
  return (
    <div style={{borderBottom: "thin solid gray"}}>
      <h4>{title}</h4>
      <h5>${price} x {quantity} = ${price * quantity}</h5>
      <button onClick= {() => delFromCart(id)}>Eliminar</button>
      <br /><br />
      <button onClick= {() => delFromCart(id, true )}>Eliminar Todo</button>
      <br /><br />
    </div>
  )
}

export default CartItem;