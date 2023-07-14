const Cart = (props) => {
const {cart, setCart}=props;
console.log("panier", props)

	return (
		<div className="cart">
			<div>Panier</div>
            {cart.map((element)=>{

return (
<div key={element.name}>
    <p>{element.name}</p><p>{element.quantity}</p>
</div>


)

            })}
		</div>
	);
};

export default Cart;
