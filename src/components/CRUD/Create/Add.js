import React from 'react';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { NavLink } from 'react-router-dom';

import './Add.css';

class Add extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleDescripChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handlePriceChange = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    add = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <NavLink to="/">
                    <Button type="danger" text="Go Back" />
                </NavLink>
                <h1 style={{ textAlign: 'center' }}>Add Product</h1>
                <form>
                    <div className="addProduct">
                        <div className="box">
                            <label>Name</label>
                            <Input type="text" onChange={this.handleNameChange} />
                        </div>
                        <div className="box">
                            <label>Description</label>
                            <Input type="text" onChange={this.handleDescripChange} />
                        </div>
                        <div className="box">
                            <label>Price</label>
                            <Input type="number" onChange={this.handlePriceChange} />
                        </div>
                        <Button onClick={this.add} text="Add" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;