import React from 'react';
import PackageAdminBox from './packages_admin_box';

class Packages extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            faqs: [],
            showNewPackageWindow: false,
            newPackageName: '',
            newPackageDesc: '',
            newPackagePrice: '',
        }

        this.writeNewPackage = this.writeNewPackage.bind(this);
        this.renderNewPackageWindow = this.renderNewPackageWindow.bind(this);
        this.updateField = this.updateField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        this.props.fetchPackages();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.packages != this.props.packages) {
            this.setState({ packages: this.props.packages })
        }
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let newPackage = {
            name: this.state.newPackageName,
            description: this.state.newPackageDesc,
            price: this.state.newPackagePrice,
        }
        this.props.composePackage(newPackage)
        .then(() => {
            this.setState(
                {
                    showNewPackageWindow: false,
                    newPackageName: '',
                    newPackageDesc: '',
                    newPackagePrice: '',
                }
            )
        })
        .then(() => this.props.fetchPackages());
    }

    writeNewPackage() {
        this.setState({
            showNewPackageWindow: true,
        })
    }

    renderNewPackageWindow() {
        return(
            <form>
            Name
            <textarea value = {this.state.newPackageName} onChange = {this.updateField('newPackageName')} />
            Description
            <textarea value = {this.state.newPackageDesc} onChange = {this.updateField('newPackageDesc')}/>
            Price
            <textarea value = {this.state.newPackagePrice} onChange = {this.updateField('newPackagePrice')}/>
            <button onClick = {this.handleSubmit}>Save</button>
            </form>
        )
    }

    render() {
        if(!this.state.packages) {
            return (null)
        }
        return(
            <>
            <div className = "faqs">
                <h2>Packages</h2>
                {this.state.packages.map(drink_package => (
                    <PackageAdminBox className = "package" 
                    key = {drink_package._id} 
                    faq = {drink_package} 
                    edit = {this.props.updatePackage}
                    delete = {this.props.deletePackage}
                    write = {this.props.composePackage}
                    fetchFAQs = {this.props.fetchPackages} />
                ))}
            </div>
                <button type = "submit" onClick={() => this.writeNewPackage()}>
                    Create New Package
                </button>
                {this.state.showNewFAQWindow ? this.renderNewPackageWindow() : null}
            </>
        )
    }
}

export default Packages