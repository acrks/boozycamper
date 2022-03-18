import React from 'react';

class Packages extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            packages: []
        }
    }

    componentDidMount() {
        this.props.fetchPackages();
    }

    componentDidUpdate(prevState) {
        if(prevState.packages != this.state.packages) {
            this.setState({
                packages: this.props.packages
            })
        }
    }
 render() {
     if(!this.state.packages) {
         return(null)
     }
     return(
        <div className = "Packages">
            <h2>Packages</h2>
            <h4>Camper Rental Starting at $425.00 per hour</h4>
            {this.state.packages.map(drink_package => (
                <div className = "package" key = {drink_package._id}>
                <h3>{drink_package.name}</h3>
                <h4>{drink_package.description}</h4>
                <h4>${(drink_package.price).toFixed(2)} per guest</h4>
                </div>
            ))}
        </div>
     )
 }
}

export default Packages