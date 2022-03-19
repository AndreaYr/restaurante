import Perico from '../../media/perico-9.jpg';

const ProductItem = ({data, addToCart}) => {
    let {id, img, title, desc, price} = data;
  return (
    <div style={{border: "thin solid gray", padding: "1rem"}}>
        
        <img src={Perico} class="card-img-top img-fluid"></img>
        <h4 className="title">{title}</h4>
        <h5>{desc}</h5>
        <h5>${price}.00</h5>
        <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;