import React from 'react';

class Product extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.description}</td>
                    <td>{this.props.price}$</td>
                    <td> {this.props.children}</td>
                </tr>
            </tbody>
        )
    }
}

export default Product;