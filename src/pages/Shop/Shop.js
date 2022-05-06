import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import "./styles.css";
import Banner from "../../components/Banner/Banner";

export default function Shop() {
  const [getProductList, setProductList] = useState([]);
  const [getCategories, setCategories] = useState([]);
  const [filtersByCat, setFiltersByCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        setProductList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:4000/categories");
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCategories();
  }, []);

  const changeFilters = (event) => {
    const value = parseInt(event.target.value);
    // if the value doesnt exist, then push it
    if (!filtersByCat.includes(value)) {
      const newArrayOfFilters = [...filtersByCat, value];
      return setFiltersByCat(newArrayOfFilters);
      // if the value exists in the array, take it out
    } else {
      const newArrayOfFilters = filtersByCat.filter((f) => {
        return f !== parseInt(value);
      });
      setFiltersByCat(newArrayOfFilters);
    }
  };

  return (
    <div>
      <Banner />
      <h1>Shop</h1>
      <div className="shop">
        <div className="category-filter">
          <h2>Categories</h2>
          {getCategories.map((c) => (
            <CategoryFilter
              key={c.id}
              categoryId={c.id}
              categoryTitle={c.title}
              changeFilters={changeFilters}
            />
          ))}
        </div>
        <div>
          {getProductList.length !== 0 ? (
            getProductList
              .filter((p) => {
                if (filtersByCat.length === 0) return true;
                console.log({ filtersByCat, id: p.categoryId });
                return filtersByCat.includes(p.categoryId);
              })
              .map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  imgUrl={p.mainImage}
                  rating={p.rating}
                  price={p.price}
                  categoryId={p.categoryId}
                />
              ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}
