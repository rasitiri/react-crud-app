import React from 'react';

import './Read.css';
import axios from 'axios';

class Read extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
    }
    componentDidMount = async () => {
        const res = await axios.get(`http://localhost:2020/products/${this.props.match.params.id}`)
        const { name, description, price } = res.data;
        this.setState({
            name,
            description,
            price
        })
    }
    render() {
        return (
            <div>
                <h1>Detail</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.name}</td>
                            <td>{this.state.description}</td>
                            <td>{this.state.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Read;