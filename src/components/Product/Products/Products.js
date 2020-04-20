import React from 'react';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Product from '../Product';
import { NavLink } from 'react-router-dom';

import './Products.css';

let DATA = [
    {
        id: 1,
        name: 'Samsung Galaxy Phone',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        price: 399.99
    },
    {
        id: 2,
        name: 'Sony Playstation 4',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        price: 419.99
    },
    {
        id: 3,
        name: 'LG Smart TV',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        price: 599.99
    }
]

class Products extends React.Component {
    state = {
        exampleProducts: DATA
    }

    deleteProduct = id => {
        let data = [...this.state.exampleProducts];
        let deletedProduct = data.find(deleteProduct => id === deleteProduct.id);
        data.splice(data.indexOf(deletedProduct), 1);
        const updatedData = [...data];
        this.setState({
            exampleProducts: updatedData
        })
    }


    searchProduct = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const displayedData = DATA.filter(el => {
            const searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            exampleProducts: displayedData
        });

    }

    render() {
        return (
            <React.Fragment>
                <Input onChange={this.searchProduct} />
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
                        this.state.exampleProducts.map(product => {
                            return (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}>
                                    <NavLink to={'edit/3'}>
                                        <Button text="Edit" />
                                    </NavLink>
                                    <Button onClick={() => this.deleteProduct(product.id)} text="Delete" type="danger" />
                                </Product>
                            )
                        })
                    }
                </table>
            </React.Fragment>
        )
    }
}

export default Products;