import React from "react";

class Drinks extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            drinks: []
        }
    }

    componentDidMount() {
        this.props.fetchDrinks()
    }

    componentDidUpdate(prevState) {
        if(prevState.drinks != this.state.drinks) {
            this.setState({
                drinks: this.props.drinks
            })
        }
    }


    render() {
        if(this.state.drinks) {
            return(
            <div className = "faqs">
                <h2>Drinks</h2>
                {this.state.drinks.map(drink => (
                    <div className = "drink" key = {drink._id}>
                        <h5>{drink.drink_name}</h5>
                        <p>{drink.ingredients}</p>
                        <p>{drink.favorite ? "Favorite!" : null}</p>
                    </div>
                ))}
            </div>
            )
        }
        else {
            return( 
                <div className = "drinks">
                    <p>Drinks menu will go here</p>
                </div>
                )
            }
        }
}

export default Drinks