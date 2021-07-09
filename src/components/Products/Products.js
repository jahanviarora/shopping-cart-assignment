import React, { useState, useEffect, useCallback } from "react";
import "./Products.scss";
import ProductDetails from "../../components/blocks/ProductDetail/ProductDetail";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    window.location.hash.substring(1)
  );

  const fetchCategoriesHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/categories");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      if (!response.ok) {
        throw new Error("something wrong");
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchProductsHandler() && fetchCategoriesHandler();
  }, [fetchProductsHandler, fetchCategoriesHandler]);

  const categoryChangeHandeler = (category) => {
    setSelectedCategoryId(category);
    window.location.hash = category;
  };

  const filteredProducts =
    selectedCategoryId && products
      ? products.filter((product) => product.category == selectedCategoryId)
      : products;

  return (
    <div className="products">
      {isLoading ? (
        <div className="no-content">Loading...</div>
      ) : error ? (
        <div className="no-content">Some error occured!</div>
      ) : (
        <>
          <ul className="product-categories">
            {categories &&
              categories.map((category) => (
                <li
                  className={
                    selectedCategoryId == category.id ? "category-active" : ""
                  }
                  key={category.id}
                  onClick={() => categoryChangeHandeler(category.id)}
                >
                  {category.name}
                </li>
              ))}
          </ul>
          <select
            value={selectedCategoryId}
            onChange={(e) => categoryChangeHandeler(e.target.value)}
            className="category-dropdown"
          >
            <option value="" disabled>
              ---Select Category---
            </option>
            {categories &&
              categories.map((_) => (
                <option value={_.id} key={_.id}>
                  {_.name}
                </option>
              ))}
          </select>
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              products &&
              filteredProducts.map((prod) => (
                <ProductDetails products={prod} key={prod.id} />
              ))
            ) : (
              <div>Currently unavailable</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
