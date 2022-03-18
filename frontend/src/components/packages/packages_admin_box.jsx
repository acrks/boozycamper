import React from 'react';

class PackageAdminBox extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            drink_package: props.drink_package,
            name: props.drink_package.name,
            desc: props.drink_package.description,
            price: props.drink_package.price,
        }

        this.editPackage = this.editPackage.bind(this);
        this.deletePackage = this.deletePackage.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
    e.preventDefault();
        let editedPackage = {
            id: this.state.drink_package._id,
            name: this.state.name,
            description: this.state.desc,
            price: this.state.price,
        }
        this.props.edit(editedPackage)
        .then(() => this.props.fetchPackages())
        .then(() => {
            this.setState(
                {
                editing: false,
                name: this.props.drink_package.name,
                desc: this.props.drink_package.description,
                price: this.props.drink_package.price,
                }
            )
        })        
    }

    editPackage() {
        this.setState({
            editing: true
        })
    }

    deletePackage() {
        this.props.delete(this.state.drink_package._id)
        .then(() => this.props.fetchPackages());
    }

    render() {
        if(this.state.editing) {
            return(
                <form>
                Name
                <textarea value = {this.state.name} onChange = {this.updateField('name')} />
                Description
                <textarea value = {this.state.desc} onChange = {this.updateField('desc')}/>
                Price
                <textarea value = {this.state.price} onChange = {this.updateField('price')}/>
                <button onClick = {this.handleSubmit}>Save</button>
                </form>
            )
        }
        else {
            return(
                <div className = "package">
                <h3>{this.state.drink_package.name}</h3>
                <h4>{this.state.drink_package.description}</h4>
                <h4>${this.state.drink_package.price.toFixed(2)} per guest</h4>
                <button type = "submit" onClick= {() => this.editPackage()}>Edit</button>
                <button type = "submit" onClick= {() => this.deletePackage()}>Delete</button>
                </div>
            )
        }
    }
}

export default PackageAdminBox