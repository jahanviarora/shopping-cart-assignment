import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import regeneratorRuntime from "regenerator-runtime";
import '../Home/Home.scss'
import Carousel from "../blocks/Carousel/Carousel";




const Home = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] =useState(true);
  const [error, setError] =useState(null);
  
  const fetchCategoriesHandler =useCallback(async () =>{
    
    try{
      const response = await fetch("http://localhost:8000/api/categories");
      if(!response.ok){
        throw new Error ('something wrong')
      }
      const data = await response.json();
      setCategories(data);
      setIsLoading(false);
    }
    catch (error){
      setError(error.message)
      setIsLoading(false);
    }
    
  }, []); 
  const fetchBannersHandler =useCallback(async () =>{
    
    try{
      const response = await fetch("http://localhost:8000/api/banners");
      if(!response.ok){
        throw new Error ('something wrong')
      }
      const data = await response.json();
      setBanners(data);
      setIsLoading(false);
    }
    catch (error){
      setError(error.message)
      setIsLoading(false);
    }
    
  }, []); 

  
  useEffect(()=>{
    fetchBannersHandler() && fetchCategoriesHandler()
  },[fetchBannersHandler,fetchCategoriesHandler]);
    
  const handleExplore = (categoryId) => {
    history.push(`/products#${categoryId}`);
  };

  return (
    <div className="home">
    {isLoading ? (
      <div className="no-content">Loading...
      </div>
    ) : error ? (
      <div className="no-content">Some error occured!</div>
    ) : (
      <>
        {banners && <Carousel data={banners} />}
        <ul className="category-list">
          {
          categories.map((category) => (
            <li key={category.id} className="category">
              <div className="category-details">
                <div className="category-title">{category.name}</div>
                <div className="category-description">
                  {category.description}
                </div>
                <button
                  type="button"
                  className="category-explore-button"
                  onClick={() => handleExplore(category.id)}
                  tabIndex={0}
                  disabled={!category.enabled}
                  onKeyPress={() => handleExplore(category.id)}
                >
                  Explore {category.name}
                </button>
              </div>
              <div className="category-right">
                <img
                  className="category-image"
                  src={category.imageUrl}
                
                  alt={category.name}
                />
              </div>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
  );
};

export default Home;
