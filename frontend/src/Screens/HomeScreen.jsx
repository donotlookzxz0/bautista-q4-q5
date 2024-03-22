import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Row, Col } from 'react-bootstrap';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import Product from '../Components/Product';
import axios from 'axios';
import CategorySelect from '../Components/CategorySelect';

function HomeScreen() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategory) {
            const filtered = products.filter(product => product.category === selectedCategory);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory, products]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <h1>Latest Products</h1>
            <CategorySelect
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
            />
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    {filteredProducts.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default HomeScreen;
