import React from 'react'

import './Input.css';

class Input extends React.Component {
    render() {
        return (
            <React.Fragment>
                <input type={this.props.type} className="inputStyle" {...this.props} />
            </React.Fragment>
        )
    }
}

export default Input;