import React from 'react';

import {NavLink} from 'react-router-dom'
import Button from '../UI/Button/Button';
import Products from '../Product/Products/Products';

class CrudApp extends React.Component {

    render() {
        return (
            <div>
                <NavLink to="/add">
                    <Button text="Add Product" btntype="info"/>
                </NavLink>
                <Products />
            </div>
        )
    }
}

export default CrudApp;