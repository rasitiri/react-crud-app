import React from 'react';

import axios from 'axios';

const AppContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_PRODUCT":
            return {
                ...state,
                exampleProducts: state.exampleProducts.filter(product =>
                    action.payload !== product.id
                )
            }
        // case "SEARCH_PRODUCT":
        //     return {
        //         ...state,
        //         exampleProducts: DATA.filter(product =>
        //             // product.name.toLocaleLowerCase().indexOf(action.payload) !== -1
        //             console.log("search product",product)
        //         )
        //     }
        case "ADD_PRODUCT":
            return {
                ...state,
                exampleProducts: [...state.exampleProducts, action.payload]
            }
        case "UPDATE_PRODUCT":
            return{
                ...state,
                exampleProducts: state.exampleProducts.map(product => product.id === action.payload.id ? action.payload : product)
            }
        default:
            return state;
    }
}

export class AppProvider extends React.Component {
    state = {
        exampleProducts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    }

    componentDidMount = async () => {
        const response = await axios.get('http://localhost:2020/products')
        this.setState({
            exampleProducts: response.data
        })
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}


const AppConsumer = AppContext.Consumer;
export default AppConsumer;