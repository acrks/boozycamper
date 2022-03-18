import React from "react";
import DrinkAdminBox from './drinks_admin_box'

class Drinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drinks: [],
            showNewDrinkWindow: false,
            newDrinkName: '',
            newDrinkIngredients: '',
            newDrinkFav: false,
            newDrinkType: '',
            newDrinkImageUrl: '',
            newDrinkDesc: '',
        }

        this.mixNewDrink = this.mixNewDrink.bind(this);
        this.renderNewDrinkWindow = this.renderNewDrinkWindow.bind(this);
        this.updateField = this.updateField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        this.props.fetchDrinks();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.drinks != this.props.drinks) {
            this.setState({
                drinks: this.props.drinks
            })
        }
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let newDrink = {
            newDrinkName: this.state.newDrinkName,
            newDrinkIngredients: this.state.newDrinkIngredients,
            newDrinkFav: this.state.newDrinkFav,
            newDrinkType: this.state.newDrinkType,
            newDrinkImageUrl: this.state.newDrinkImageUrl,
            newDrinkDesc: this.state.newDrinkDesc,
        }
        this.props.composeDrink(newDrink)
        .then(() => {
            this.setState(
                {
                    showNewDrinkWindow: false,
                    newDrinkName: '',
                    newDrinkIngredients: '',
                    newDrinkFav: false,
                    newDrinkType: '',
                    newDrinkImageUrl: '',
                    newDrinkDesc: '',
                }
            )
        })
        .then(() => this.props.fetchDrinks());
    }

    mixNewDrink() {
        this.setState({
            showNewDrinkWindow: true,
        })
    }

    renderNewDrinkWindow() {
        return(
            <form>
            Name
            <textarea value = {this.state.newDrinkName} onChange = {this.updateField('newDrinkName')} />
            Ingredients
            <textarea value = {this.state.newDrinkIngredients} onChange = {this.updateField('newDrinkIngredients')}/>
            Favorite
            <input type = "radio" 
            value = {this.state.newDrinkFav} 
            checked = {this.state.newDrinkFav}
            onChange = {this.updateField('newDrinkFav')}
            />
            Type
            <select value = {this.state.newDrinkType} text-align-last = "center" onChange = {this.updateField('newDrinkType')}>
              <option value="" disabled defaultValue className = "appoinment-style-option">Type of Drink</option>
              <option value="Mixed Drink" className = "appoinment-style-option">Mixed Drink</option>
              <option value="Beer" className = "appoinment-style-option">Beer</option>
              <option value="Wine" className = "appoinment-style-option">Wine</option>
            </select>
            Description
            <textarea value = {this.state.newDrinkDesc} onChange = {this.updateField('newDrinkDesc')} />
            <button onClick = {this.handleSubmit}>Save</button>
            </form>
        )
    }


    render() {
        if(!this.state.drinks) {
            return (
                <div className = "drinks">
                <p>Drinks menu will go here</p>
            </div>
            )
        }
        return( 
            <>
            <div className = "drinks">
                <h2>Drinks</h2>
                {this.state.drinks.map(drink => (
                    <DrinkAdminBox className = "drink" 
                    key = {drink._id} 
                    drink = {drink} 
                    edit = {this.props.updateDrink}
                    delete = {this.props.deleteDrink}
                    write = {this.props.composeDrink}
                    fetchDrinks = {this.props.fetchDrinks} />
                ))}
            </div>
                <button type = "submit" onClick={() => this.mixNewDrink()}>
                    Create New Drink
                </button>
                {this.state.showNewDrinkWindow ? this.renderNewDrinkWindow() : null}
            </>
        )
    }
}

export default Drinks