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
        this.postImage = this.postImage.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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

    async postImage({image}) {
        const formData = new FormData();
        formData.append("image", image)
        formData.append("description", this.state.newDrinkName)
      
        const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        return result.data
      }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit = async e => {
        e.preventDefault();
        const result = await postImage({image: file})
        this.setState({
            imageUrl: result.image
        })
        let newDrink = {
            drink_name: this.state.newDrinkName,
            ingredients: this.state.newDrinkIngredients,
            favorite: this.state.newDrinkFav,
            beverage_type: this.state.newDrinkType,
            image_url: this.state.newDrinkImageUrl,
            description: this.state.newDrinkDesc,
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
            showNewDrinkWindow: !this.state.showNewDrinkWindow,
        })
    }

    fileSelected(e) {
        const file = e.target.files[0]
        this.setState = ({
            imageUrl: file
        })
    }

    renderNewDrinkWindow() {
        return(
            <>
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
            <input onChange = {this.fileSelected} type = "file" accept="image/*"/>
            <button onClick = {this.handleSubmit}>Save</button>
            </form>
            <button type = "submit" onClick={() => this.mixNewDrink()}>
                Exit
            </button>
            </>
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
                {this.state.showNewDrinkWindow 
                ? 
                this.renderNewDrinkWindow() 
                :
                <button type = "submit" onClick={() => this.mixNewDrink()}>
                    Create New Drink
                </button>}
            </>
        )
    }
}

export default Drinks