import axios from "axios";

export async function getDiscount(
  productId: number,
  productName: string,
  qty: number,
  price: number
) {
  const { data } = await axios.post("/getdiscount", {
    productId: 1,
    qty: 1,
  });
  const { discount } = data;

  return {
    productId: productId,
    productName: productName,
    qty: qty,
    price: price,
    discount: discount,
    net: price - (price * discount) / 100,
  };
}
