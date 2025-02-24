import React, { useEffect, useState } from 'react';
import { getProductDetails } from '../services/api';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const ProductDetails = () => {
    const { storeId, sku } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductDetails(storeId, sku).then(setProduct).catch(console.error);
    }, [storeId, sku]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/products/${storeId}/${sku}`)
    //       .then((res) => res.json())
    //       .then((data) => setProduct(data))
    //       .catch((err) => console.error("Error fetching product:", err));
    //   }, [storeId, sku]);
      

    if (!product) return <p>Loading...</p>;

    return (
        <Container>
            <Card>
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price: ${product.price}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductDetails;