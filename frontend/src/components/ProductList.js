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
        <Container>
            <Row>
                {products.map((product) => (
                    <Col key={product.sku} md={4}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Button onClick={() => navigate(`/products/${storeId}/${product.sku}`)}>
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