import { getFromLS } from "./../../utils/getItemsFromLS";
const Cart = () => {
  const cart = getFromLS("cart");
  console.log(cart?.length);
  return <div></div>;
};

export default Cart;
