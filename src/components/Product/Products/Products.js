import React from 'react';

import Button from '../../UI/Button/Button';
import Product from '../Product';
import { NavLink } from 'react-router-dom';
import AppConsumer from '../../../context/context';

import axios from 'axios';

import './Products.css';

class Products extends React.Component {
    deleteProduct = async (dispatch, id) => {
        axios.delete(`https://react-app-json-server.herokuapp.com/products/${id}`)

        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id
        })

    }

    render() {
        return (
            <AppConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <React.Fragment>
                                <table className="tableStyle">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    {
                                        value.exampleProducts.map(product =>
                                            (
                                                <Product
                                                    key={product.id}
                                                    id={product.id}
                                                    name={product.name}
                                                    description={product.description}
                                                    price={product.price}>
                                                    <NavLink to={`edit/${product.id}`}>
                                                        <Button
                                                            btntype="success"
                                                            text="Edit" />
                                                    </NavLink>
                                                    <Button
                                                        onClick={() => this.deleteProduct(dispatch, product.id)}
                                                        text="Delete"
                                                        btntype="danger" />
                                                </Product>
                                            )
                                        )
                                    }
                                </table>
                            </React.Fragment>
                        )
                    }
                }
            </AppConsumer>
        )
    }
}

export default Products;