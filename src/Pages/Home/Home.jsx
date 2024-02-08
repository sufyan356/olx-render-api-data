// import React from 'react'
// import Cards from '../../Components/Cards'
// import Slider from '../../Components/Slider'
// // import ProductsData from '../../Components/ProductsData'
// import {useState , useEffect } from 'react';

// const Home = () => {
//   const [data , setData] = useState([])
//   useEffect(() => {
//       const fetchData = async () => {
//           try{
//             //   const response = await fetch('https://dummyjson.com/products');
//               const smartPhonesResponse = await fetch('https://dummyjson.com/products/category/smartphones');
//               const laptopsResponse = await fetch('https://dummyjson.com/products/category/laptops');
//               const smartPhonesResponsejsonData = await smartPhonesResponse.json();
//               // console.log(jsonData)
//               setData( smartPhonesResponsejsonData.products)
//           }
//           catch(error){
//               console.log(error.message)
//               console.log(error.code)
//           }
//       }
//       fetchData();
//   },[])

//   return (
//    <>

//    <Slider />
//     <Cards value = {data}/>
//    </>
//   )
// }

// export default Home

import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards";
import Slider from "../../Components/Slider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products")
        const jsonData = await response.json()

        // const [smartPhonesResponse, laptopsResponse, fragrancesResponse , skincareResponse] =
        //   await Promise.all([
        //     fetch("https://dummyjson.com/products/category/smartphones"),
        //     fetch("https://dummyjson.com/products/category/laptops"),
        //     fetch("https://dummyjson.com/products/category/fragrances"),
        //     fetch("https://dummyjson.com/products/category/skincare"),
        //   ]);

        // const smartPhonesResponsejsonData = await smartPhonesResponse.json();
        // const laptopsResponsejsonData = await laptopsResponse.json();
        // const fragrancesResponsejsonData = await fragrancesResponse.json();
        // const skincareResponsejsonData = await skincareResponse.json();

        // // Combine the data into a single array
        // const combinedData = [
        //   ...smartPhonesResponsejsonData.products,
        //   ...laptopsResponsejsonData.products,
        //   ...fragrancesResponsejsonData.products,
        //   ...skincareResponsejsonData.products,
        // ];

        setData(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const imageData = [
    
      'https://images.olx.com.pk/thumbnails/424970966-800x600.webp',
      'https://images.olx.com.pk/thumbnails/424970966-800x600.webp',
      'https://images.olx.com.pk/thumbnails/424970966-800x600.webp',
  ];

  return (
    <>
    <Container fluid>
      <Row>
          <Col>
            <Slider images={imageData}/>
          </Col>
      </Row> 
    </Container>
       
     
      <Cards items={data} />
    </>
  );
};

export default Home;
