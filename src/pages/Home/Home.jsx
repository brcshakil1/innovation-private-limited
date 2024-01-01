import { useEffect, useState } from "react";
import Product from "../../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  return (
    <div>
      <h2>HOme</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
