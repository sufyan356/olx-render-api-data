import React, { useEffect, useState } from 'react';
import Header from '../../Pages/Header/index';
import Footer from '../../Pages/Footer/index';

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const jsonData = await response.json();
        setCategory(jsonData);
      } catch (error) {
        console.error(error.message);
        console.error(error.code);
      }
    };

    fetchData();
  }, []);
  console.log(category)

  return (
    <>
        {/* <Header categoryData={category}/>
        <Footer categoryData={category}/> */}
    </>
  )
};

export default Categories;
