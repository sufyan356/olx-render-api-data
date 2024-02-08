
import React, { useState, useEffect } from "react";
import { Container, Row, Col , Spinner } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/categories");
        const jsonData = await response.json();
        setCategories(jsonData);
      } catch (error) {
        console.log(error.message);
        console.log(error.code);
      }
    };
    fetchData();
  }, []);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <Container fluid>
      <Row className="rowCustom">
        {categories.length > 0 ? (
          <Container className="footerCustom" >
            <Row className="mt-5 mb-6 row">
              <Col xs = {6} md = {3} className="colCustom categories">
                <span className="categoryHead">POPULAR CATEGORIES:</span>
                {showAllCategories
                  ? categories.map((data, index) => (
                      <span key={index} className="categoryData">
                        {data}
                      </span>
                    ))
                  : categories.slice(0, 4).map((data, index) => (
                      <span key={index} className="categoryData">
                        {data}
                      </span>
                    ))}
                <button className="viewMoreBtn" onClick={toggleCategories}>
                  {showAllCategories ? "View Less" : "View More"}
                </button>
              </Col>

              <Col xs = {6} md = {3} className="colCustom trendingSearches">
                   <span className="trendingSearchedHeading">
                     TRENDING SEARCHES
                   </span>
                   <span className="categoryData"> laptops </span>
                   <span className="categoryData"> home-decoration </span>
                   <span className="categoryData"> womens-jewellery </span>
                   <span className="categoryData">sunglasses</span>
              </Col>

              <Col xs = {6} md = {3} className="colCustom OLX">
                   <span className="OLXFooterHeading">OLX</span>
                   <span className="categoryData"> Help </span>
                   <span className="categoryData"> Siteman </span>
                   <span className="categoryData">Terms of Use </span>
                   <span className="categoryData">Privacy Policy</span>
              </Col>

              <Col xs = {6} md = {3} className="colCustom followUs">
                   <span className="FooterFollowUsHeading">FOLLOW US</span>
                   <div classname="_1075545d _3a13e88c _96d4439a">
                     <img
                      src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg"
                      alt="Twitter Logo"
                    />

                    <img
                      src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg"
                      alt="Facebook Logo"
                    />
                    <img
                      src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg"
                      alt="Youtube Logo"
                    />
                    <img
                      src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg"
                      alt="Instagram Logo"
                    />
                  </div>
              </Col>

            </Row>
          </Container>
        ) : (
            <div className="footerLoader">
                <Spinner animation="grow" variant="secondary" />
            </div>
           

        )}
      </Row>
    </Container>
  );
};

export default Footer;

