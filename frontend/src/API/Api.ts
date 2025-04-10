import axios from "axios";

export async function getProducts() {
  const data = await axios.get("http://localhost:1337/api/products?populate=*");
  console.log(data.data.data);

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  return data.data;
}
