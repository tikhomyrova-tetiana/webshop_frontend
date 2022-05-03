import ProductCard from "../components/ProductCard/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Shop() {
  const [getProductList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/products");
      setProductList(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {getProductList.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          imgUrl={p.mainImage}
          rating={p.rating}
          price={p.price}
        />
      ))}
    </div>
  );
}
