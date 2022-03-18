import React from "react";

class AboutUsAdmin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            newLongerMessage: '',
            newShorterMessage: '',
        }
    }
    
    componentDidMount() {
        this.fetchAboutUs();
    }
    
    render() {
    return( 
    <div className = "aboutus">
        <p>The story will go here</p>
    </div>)
    }
}

export default AboutUsAdmin