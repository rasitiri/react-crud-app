import React from 'react';

import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <button className={
                this.props.btntype === "danger" ? 
                "buttonStyleDanger" : ((this.props.btntype === "success") ? 
                ("buttonStyleSuccess") : ((this.props.btntype==="info") ? 
                ("buttonStyleInfo") : (this.props.btntype === "disabled") ? ("buttonStyleDisabled") : null))
            } {...this.props}>{this.props.text}</button>
        )
    }
}

export default Button;