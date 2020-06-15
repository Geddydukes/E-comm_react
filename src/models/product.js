const appApi = "http://localhost:4000/api/v1";

export const indexProducts = async () => {
  const res = await fetch(`${appApi}/products`, { method: "Get" });
  const json = await res.json();
  return json;
};

export const showProduct = (productId) => {
  return fetch(`${appApi}/products/${productId}`).then((res) => res.json());
};

// module.exports = {
//   indexProducts,
//   showProduct,
// };
