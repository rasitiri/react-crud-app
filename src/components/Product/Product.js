import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css';

class Product extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <NavLink className="linkStyle" to={`/show/${this.props.id}`}>
                        <td>{this.props.name}</td>
                    </NavLink>
                    <td>{this.props.description}</td>
                    <td>{this.props.price}$</td>
                    <td> {this.props.children}</td>
                </tr>
            </tbody>
        )
    }
}

export default Product;