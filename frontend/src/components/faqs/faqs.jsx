import React from 'react';

class FAQs extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        }
    }

    componentDidMount() {
        this.props.fetchFAQs();
    }

    componentDidUpdate(prevState) {
        if(prevState.faqs != this.state.faqs) {
            this.setState({ faqs: this.props.faqs })
        }
    }

    render() {
        if(!this.state.faqs.length) {
            return (null)
        }
        return(
            <div className = "faqs">
                <h2>Frequently Asked Questions</h2>
                {this.state.faqs.map(faq => (
                    <div className = "faq">
                        <h4>{faq.question}</h4>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        )
 }
}

export default FAQs