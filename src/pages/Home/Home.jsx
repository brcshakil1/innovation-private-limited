import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Banner from "../../components/Banner";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState(allProducts);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data?.products));
  }, [search]);

  useEffect(() => {
    let filteredProducts = [...allProducts];

    if (filter === "lowToHeigh") {
      filteredProducts.sort((a, b) => a?.price - b?.price);
    } else if (filter === "heighToLow") {
      filteredProducts.sort((a, b) => b?.price - a?.price);
    }

    setProducts(filteredProducts);
  }, [allProducts, filter]);

  return (
    <div className="">
      <Banner setCart={setCart} cart={cart} setSearch={setSearch} />

      <div className="max-w-7xl mx-auto px-5">
        <div className="w-[200px]">
          <select
            defaultValue="all"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full py-2 px-3 uppercase rounded-md shadow-md"
          >
            <option value="">All</option>
            <option value="lowToHeigh">Low to heigh</option>
            <option value="heighToLow">Heigh to low</option>
          </select>
        </div>
        <div className="py-7">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products?.map((product) => (
              <Product
                key={product?.id}
                product={product}
                setCart={setCart}
                cart={cart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
