import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../Components/FormContainer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createProduct } from '../actions/userActions';

const CreateProductScreen = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: null,
    });

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(formData)); // Dispatch createProduct action with formData
    };

    if (!userInfo) {
        return (
            <div>
                <h2>You need to be logged in to sell a product.</h2>
                <p>
                    If you don't have an account, please <Link to='/register'>register</Link>.
                </p>
            </div>
        );
    }

    return (
        <FormContainer>
            <h1>Create Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='name'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter product name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={4}
                        placeholder='Enter product description'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId='price'>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter product price'
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId='image'>
                    <Form.Label>Image:</Form.Label>
                    <Form.Control
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Create Product
                </Button>
            </Form>
        </FormContainer>
    );
};

export default CreateProductScreen;