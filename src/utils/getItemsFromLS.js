export const setCartProductInLS = (cart) => {
  const cartProducts = JSON.stringify(cart);
  localStorage.setItem("cart-products", cartProducts);
};

export const getCartProductFromLS = (username) => {
  const products = JSON.parse(localStorage.getItem("cart-products"));
  const userMatch = products?.filter((pd) => pd.username === username);
  if (userMatch) {
    return products;
  }
};
