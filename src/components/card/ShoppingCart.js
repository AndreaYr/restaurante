import React from 'react'
import {useReducer} from 'react';
import './Target.css';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { Types } from './ShoppingActions';
import { shoppingInitialState, shoppingReducer } from './ShoppingReducer';
import { type } from '@testing-library/user-event/dist/type';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    
    const{products, cart} = state;

    //funcion que permite agregar el carrito
    const addToCart = (id) =>{
        dispatch({type: Types.add_to_cart, payload: id});
    }

    const delFromCart = (id, all = false) =>{
        if(all){
            dispatch({type: Types.remove_all_from_cart, payload: id})
        }else{
            dispatch({type: Types.remove_one_from_cart, payload: id})

        }
    };

    const clearCart = () =>{
        dispatch({type: Types.clear_cart});
    }

  return (
    <div className='container-shoppingCart'>

        <h3 className='title-products'>Productos</h3>
        <div className='container-target'>
            <article className='box grid-responsive'>
                {products.map((product) => (
                    <ProductItem
                        key={product.id} 
                        data={product} 
                        addToCart={addToCart}/>
                ))}
            </article>
        </div>

        <div className='containt-card'>
            <h2 className='title-resumen'>Carrito - Resumen</h2>

            <article className='box'>
                {
                    cart.map((item, index) => <CartItem key={index} data={item}
                        delFromCart={delFromCart}
                    />)
                }
                <button onClick={clearCart}>Limpiar Carrito</button> <br /><br />
                <button >Realizar Compra</button>

            </article>
        </div>

    </div>
  )
}

export default ShoppingCart;