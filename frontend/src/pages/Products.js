import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Products = ({ storeId }) => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    // Fetch all products on component mount
    useEffect(() => {
        getAllProducts()
            .then(setProducts)
            .catch(console.error);
    }, []);
    
    if (!products.length) return <p>Loading products...</p>;

    return (
        <Container className="mt-5">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {products.map((product) => (
                    <Col key={product.sku}>
                        <Card className="shadow-sm rounded">
                            <Card.Img 
                                variant="top" 
                                src={product.imageUrl} 
                                style={{ height: '250px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                            <Card.Body>
                                <Card.Title className="fw-bold">{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text className="fs-5 fw-semibold text-primary">
                                    ₹{product.price}
                                </Card.Text>
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

export default Products;
