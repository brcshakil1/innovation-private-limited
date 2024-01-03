export const getTotalPrice = (cart) =>
  cart?.reduce((total, product) => {
    const discountPrice =
      (product?.product?.price * product?.product?.discountPercentage) / 100;
    const price = product?.product?.price - discountPrice;
    return total + price;
  }, 0);
