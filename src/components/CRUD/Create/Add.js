import React from 'react';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import { NavLink } from 'react-router-dom';
import { ValidError } from '../../Error/validMessage';

import './Add.css';

class Add extends React.Component {
    state = {
        name: '',
        description: '',
        price: '',
        formErrors: { name: true, description: true, price: true },
        nameValid: false,
        descriptionValid: false,
        priceValid: false,
        formValid: false
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let descriptionValid = this.state.descriptionValid;
        let priceValid = this.state.priceValid;

        switch (fieldName) {
            case 'name':
                nameValid = value.length > 4;
                fieldValidationErrors.name = nameValid ? false : true;
                break;
            case 'description':
                descriptionValid = value.length >= 15;
                fieldValidationErrors.description = descriptionValid ? false : true;
                break;
            case 'price':
                priceValid = value.match(/^([0-9])/) && value.length >= 1;
                fieldValidationErrors.price = priceValid ? false : true;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            descriptionValid: descriptionValid,
            priceValid: priceValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.nameValid && this.state.descriptionValid && this.state.priceValid });
    }

    disabledControl = () => {
        const data = [...Object.values(this.state.formErrors)].some(e => {
            return e
        });
        return data
    }

    addProduct = (e) => {
        e.preventDefault();
        const {name, description, price} = this.state
        const data = {
            name,
            description,
            price
        }
        console.log(data);
    }

    render() {
        return (
            <div>
                <NavLink to="/">
                    <Button btntype="success" text="Go Back" />
                </NavLink>
                <h1 style={{ textAlign: 'center' }}>Add Product</h1>
                <ValidError formErrors={this.state.formErrors} />
                <form onSubmit={this.addProduct}>
                    <div className="addProduct">
                        <div className="box">
                            <label>Name</label>
                            <Input
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className="box">
                            <label>Description</label>
                            <Input
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className="box">
                            <label>Price</label>
                            <Input
                                name="price"
                                type="number"
                                value={this.state.price}
                                onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <Button disabled={this.disabledControl()} btntype="info" text="Add" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;