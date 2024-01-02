import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Banner from "../../components/Banner";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

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

  console.log(search);

  return (
    <div className="max-w-7xl mx-auto px">
      <Banner setSearch={setSearch} />

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="col-span-1">
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
        <div className="col-span-1 lg:col-span-4 md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product) => (
              <Product key={product?.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
