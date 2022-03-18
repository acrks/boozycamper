import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mainPage: this.props.mainPage,
            message: ''
            ,
        }
    }

    componentDidMount() {
        if(this.props.mainPage) {
            this.props.fetchAboutUsSingle('6233b306a2fdaeec176ebb0c')
        }
        else {
            this.props.fetchAboutUsSingle('623023a8692a4bf6f98b4414')
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.aboutus != prevProps.aboutus) {
            this.setState({
                message: this.props.aboutus['text']
            })
        }
    }

    render() {
        if(this.state.message === '') {
            return (
                <p>{this.state.message}</p>
                );
            }
        else {
            return( 
                <div className = "aboutus">
                    {this.state.message}
                </div>
            )
        }
    }
}

export default AboutUs