import { Types } from "./ShoppingActions";
import Perico from '../../media/perico-9.jpg';


export const shoppingInitialState = {
    products: [
        {
            id: 1,
            img: Perico, 
            title: 'Bandeja Paisa', 
            desc: 'Incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla', 
            price: 15000
        },
        {
            id: 2,
            img: Perico, 
            title: 'Churrasco', 
            desc: 'Incluye frijoles, arroz blanco, chicharrón,carne en polvo, chorizo, huevo frito, plátano maduro, aguacate y arepa, pero se puede sustituir la carne en polvo por carne de res o de cerdo a la parrilla', 
            price: 20000
        },
        {
            id: 3,
            img: Perico, 
            title: 'Mojarra Frita', 
            desc: 'mojarra dorada, muy crocante y perfectamente cocida, acompañada de arroz con coco, ensalada, patacones y los cascos de limón que no pueden faltar', 
            price: 22000
        },
        {
            id: 4,
            img: Perico, 
            title: 'Punta de Ancla', 
            desc: 'Jugoso Corte de Cuadril o Picanha Asada al Carbón, bañada con salsa Chimichurry, Acompañado con Casquitos de Papas, Croquetas de Yuca o Papas a la Francesa y Ensalada de la Casa.', 
            price: 25000
        },
    ],
    cart:[],
};

export function shoppingReducer(state, action){
    switch(action.type){
        
        case Types.add_to_cart: {
            let newItem = state.products.find(
                (product) => product.id === action.payload);
            
            let iteminCart = state.cart.find((item) => item.id === newItem.id);
            return iteminCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => 
                        item.id === newItem.id
                        ? {...item, quantity: item.quantity + 1} 
                        : item 
                    ),

                } : {
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}],
            } ;
            
        }

        //Elimina un producto
        case Types.remove_one_from_cart: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);

            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload 
                    ? {...item, quantity: item.quantity -1 }
                    :item),
            } 
            : {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }

        //Elimina todos los articulos de un producto
        case Types.remove_all_from_cart: {
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }

        //elimina todos los productos
        case Types.clear_cart: 
            
            return shoppingInitialState;

        default:
            return state;
    } 
}