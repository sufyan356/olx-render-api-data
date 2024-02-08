

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import Slider from "../../Components/Slider";

function ProductDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/");
        const jsonData = await response.json();
        setData(jsonData.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const { id } = useParams();
  const product = data.find((element) => element.id == id);
 
   
  
  return (
    <>
      {loading ? (
        <div className="loaderContainer">
          <Spinner animation="grow" variant="secondary" />
        </div>
      ) : product ? (
        <>
          <Container fluid>
            <Row>
              <Col sm={7}>
                <div className="sliderContainerForProductDesc">
                  <Slider images={product.images} />
                </div>
              </Col>
  
              <Col sm={5}>
                <div className="chatAndLocationCOntainer">
                  <div className="chat">
                    <Card style={{ width: "100%" }} className="cardDesc">
                      <Card.Body className="d-flex">
                        <Card.Title className="customerImg"><img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="customerImage" className="img-fluid customerImage"/></Card.Title>
                        <div className="customerDesc">
                          <Card.Title>Name</Card.Title>
                          <Card.Text>Member Since June 12</Card.Text>
                        </div>
                      </Card.Body>
                      <div className="btnContainerChat">
                        <Button variant="primary">Show Phone Number</Button>
                        <Button variant="primary" className="mb-5">Chat</Button>
                      </div>
                    </Card>
                  </div>
                  <div className="location">
                    <Card className="cardLoc">
                      <Card.Body className="locBody">
                      Location
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
  
          <Container fluid>
            <Row>
              <Col sm={7}>
                <div className="productCategoriesDescParent">
                  <Card className="productRupees">
                    <Card.Body>
                      <Card.Title className="productPrice">RS: {product.price}</Card.Title>
                      <Card.Text className="productCategory">{product.category}</Card.Text>
                      <Card.Text>Karachi</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
  
          <Container fluid>
            <Row>
              <Col sm={7}>
                <div className="productCategoriesDescParent">
                  <Card className="productDetails">
                    <Card.Body>
                      <Card.Title className="productDetailsHead">Details</Card.Title>
                      <div className="d-flex justify-content-around">
                        <Card.Text className="">Price: {product.price}</Card.Text>
                        <Card.Text>Brand: {product.brand}</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
  
          <Container fluid>
            <Row>
              <Col sm={7}>
                <div className="productCategoriesDescParent">
                  <Card className="productDesc">
                    <Card.Body>
                      <Card.Title className="productDescriptionHead">Description</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        // Placeholder or leave empty if there's nothing to render when product is falsy
        <div className="text-center">No product data available</div>
      )}
    </>
  );
  
}

export default ProductDetails;
