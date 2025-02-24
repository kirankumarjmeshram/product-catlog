import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/api";

const ProductDetails = () => {
  const { storeId, sku } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails(storeId, sku).then(setProduct).catch(console.error);
  }, [storeId, sku]);

  if (!product) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button href="/">Back to Home</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;