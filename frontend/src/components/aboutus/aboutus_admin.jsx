import React from "react";
import AboutUsAdminBox from './aboutus_admin_box';

class AboutUsAdmin extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            aboutusall: []
        }
    }
    
    componentDidMount() {
        this.props.fetchAboutUs();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.aboutus != this.props.aboutus) {
            this.setState({ aboutusall: this.props.aboutus })
        }
        console.log(this.state.aboutusall)
    }
    
    render() {
    return( 
    <div className = "aboutus">
        {this.state.aboutusall.map(aboutus => (
            <AboutUsAdminBox 
            key = {aboutus._id}
            aboutus = {aboutus}
            edit = {this.props.updateAboutUs}
            fetchAboutUs = {this.props.fetchAboutUs}
            />
        ))}
    </div>)
    }
}

export default AboutUsAdmin