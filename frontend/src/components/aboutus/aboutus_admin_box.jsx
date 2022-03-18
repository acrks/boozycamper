import React from 'react';

class AboutUsAdminBox extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            aboutus: props.aboutus,
            text: props.aboutus.text,
            editing: false,
        }

        this.editAboutUs = this.editAboutUs.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
    e.preventDefault();
        let editedAboutUs = {
            id: this.props.aboutus._id,
            text: this.state.text,
        }
        this.props.edit(editedAboutUs)
        .then(() => this.props.fetchAboutUs())
        .then(() => {
            this.setState(
                {
                    editing: false,
                    text: this.props.aboutus.text,
                }
            )
        })        
    }

    editAboutUs() {
        this.setState({
            editing: true
        })
    }

    render() {
        if(this.state.editing) {
            return(
                <form>
                Question
                <textarea value = {this.state.text} onChange = {this.updateField('text')} />
                <button onClick = {this.handleSubmit}>Save</button>
                </form>
            )
        }
        else {
            return(
                <div className = "faq">
                    {this.state.aboutus._id == '623023a8692a4bf6f98b4414' 
                    ?  
                    <h4>More Detailed About Us Page</h4>
                    :
                    <h4>For Front Page</h4>
                    }
                    <p>{this.state.text}</p>
                    <button type = "submit" onClick= {() => this.editAboutUs()}>Edit</button>
                </div>
            )
        }
    }
}

export default AboutUsAdminBox