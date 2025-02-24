import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { fetchProducts } from "../services/api";
import { useNavigate } from "react-router-dom";

const ProductList = ({ storeId }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (storeId) {
      fetchProducts(storeId).then(setProducts).catch(console.error);
    }
  }, [storeId]);

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.sku} md={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button onClick={() => navigate(`/product/${storeId}/${product.sku}`)}>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;