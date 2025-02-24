import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ storeId }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (storeId) {
            getProducts(storeId).then(setProducts).catch(console.error);
        }
    }, [storeId]);

    return (
        <Container className="mt-4">
            <Row className="g-4">
                {products.map((product) => (
                    <Col key={product.sku} xs={12} sm={6} md={4} lg={3}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img 
                                variant="top" 
                                src={product.imageUrl} 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-truncate">{product.name}</Card.Title>
                                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                                <Button 
                                    onClick={() => navigate(`/products/${storeId}/${product.sku}`)}
                                    variant="primary"
                                >
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
