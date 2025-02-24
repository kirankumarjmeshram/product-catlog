import React, { useEffect, useState } from 'react';
import { getProductDetails } from '../services/api';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
    const { storeId, sku } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details from ElasticSearch
        getProductDetails(storeId, sku)
            .then(setProduct)
            .catch(console.error);
    }, [storeId, sku]);

    if (!product) return <p>Loading...</p>;

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow-lg p-3 rounded">
                        <Card.Img 
                            variant="top" 
                            src={product.imageUrl} 
                            style={{ height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                        />
                        <Card.Body className="text-center">
                            <Card.Title className="fw-bold">{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text className="fs-5 fw-semibold text-primary">
                                Price: ₹{product.price}
                            </Card.Text>
                            {product.availableForDelivery && (
                                <Card.Text className="text-success">Available for Delivery</Card.Text>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
