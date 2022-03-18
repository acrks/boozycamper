import React from 'react';

class DrinkAdminBox extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            drink: props.drink,
            name: props.drink.drink_name,
            type: props.drink.beverage_type,
            ingredients: props.drink.ingredients,
            imageUrl: props.drink.image_url,
            fav: props.drink.favorite,
            desc: props.drink.description,
        }

        this.editDrink = this.editDrink.bind(this);
        this.deleteDrink = this.deleteDrink.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
    e.preventDefault();
        let editedDrink = {
            id: this.state.drink._id,
            drink_name: this.state.name,
            ingredients: this.state.ingredients,
            favorite: this.state.fav,
            beverage_type: this.state.type,
            image_url: this.state.imageUrl,
            description: this.state.desc,
        }
        this.props.edit(editedDrink)
        .then(() => this.props.fetchDrinks())
        .then(() => {
            this.setState(
                {
                editing: false,
                drink: this.props.drink,
                name: this.props.drink.drink_name,
                type: this.props.drink.drink_type,
                ingredients: this.props.drink.ingredients,
                imageUrl: this.props.drink.image_url,
                fav: this.props.drink.favorite,
                desc: this.props.drink.description,
                }
            )
        })        
    }

    editDrink() {
        this.setState({
            editing: true
        })
    }

    deleteDrink() {
        this.props.delete(this.state.drink._id)
        .then(() => this.props.fetchDrinks());
    }

    render() {
        if(this.state.editing) {
            return(
                <form>
                Name
                <textarea value = {this.state.name} onChange = {this.updateField('name')} />
                Ingredients
                <textarea value = {this.state.ingredients} onChange = {this.updateField('ingredients')}/>
                Favorite
                <input type = "radio" 
                value = {this.state.fav} 
                checked = {this.state.fav}
                onChange = {this.updateField('fav')}
                />
                Type
                <select value = {this.state.type} text-align-last = "center" onChange = {this.updateField('type')}>
                  <option value="" disabled defaultValue className = "appoinment-style-option">Type of Drink</option>
                  <option value="Mixed Drink" className = "appoinment-style-option">Mixed Drink</option>
                  <option value="Beer" className = "appoinment-style-option">Beer</option>
                  <option value="Wine" className = "appoinment-style-option">Wine</option>
                </select>
                Description
                <textarea value = {this.state.desc} onChange = {this.updateField('desc')} />
                <button onClick = {this.handleSubmit}>Save</button>
                </form>
            )
        }
        else {
            console.log(this.state)
            return(
                <div className = "drink">
                    <h4>{this.state.name}</h4>
                    <p>{this.state.ingredients}</p>
                    <p>{this.state.desc}</p>
                    <p>{this.state.fav}</p>
                    <p>{this.state.type}</p>
                    <button type = "submit" onClick= {() => this.editDrink()}>Edit</button>
                    <button type = "submit" onClick= {() => this.deleteDrink()}>Delete</button>
                </div>
            )
        }
    }
}

export default DrinkAdminBox