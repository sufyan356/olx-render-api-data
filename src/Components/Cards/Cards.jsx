

import React, { useState } from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({ items }) => {
  // Group items by category
  const groupedItems = {};
  items.forEach((item) => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });

  // console.log(groupedItems)  // object of array of object
  const [showMoreMap, setShowMoreMap] = useState({});

  const toggleShowMore = (category) => {
    setShowMoreMap((prevMap) => ({
      ...prevMap,
      [category]: !prevMap[category],
    }));
  };

  return (
    <Container fluid>
      {items.length > 0 ? (
        Object.keys(groupedItems).map((category, index) => (
          <div key={index}>
            <h2>{category}</h2>
            <Row className='mt-5 mb-6 cardsRow'>
              {groupedItems[category]
                .slice(0, showMoreMap[category] ? groupedItems[category].length : 3)
                .map((item) => (
                  <Col key={item.id} className='mt-3 mb-3 colCustomClassForCards flex-wrap'>
                    <Link to={`/product/${item.id}`} className='cardsLink'>
                      <Card style={{}} className='card productsCard' sm = {12}>
                        <Card.Img variant='top' src={item.thumbnail} className='img-fluid cardCustom' title={item.title} />
                        <Card.Body className='cardBody'>
                          <Card.Text className='price'>
                            <span className='Rs'>RS: </span>
                            {item.price}
                          </Card.Text>
                          <Card.Title className='title'>{item.title}</Card.Title>
                          <Card.Text className='description'>{item.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
            </Row>
            {groupedItems[category].length > 3 && (
              <div>
                <button type='button' onClick={() => toggleShowMore(category)} className='seeMoreClass'>
                  {showMoreMap[category] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className='cardLoader'>
          <Spinner animation='grow' variant='secondary' />
        </div>
      )}
    </Container>
  );
};

export default Cards;












