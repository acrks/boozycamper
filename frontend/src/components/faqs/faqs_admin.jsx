import React from 'react';
import FAQAdminBox from './faqs_admin_box';

class FAQs extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            faqs: [],
            showNewFAQWindow: false,
            newFAQQuestion: '',
            newFAQAnswer: '',
        }

        this.writeNewFAQ = this.writeNewFAQ.bind(this);
        this.renderNewFAQWindow = this.renderNewFAQWindow.bind(this);
        this.updateField = this.updateField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    componentDidMount() {
        this.props.fetchFAQs();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.faqs != this.props.faqs) {
            this.setState({ faqs: this.props.faqs })
        }
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let newFAQ = {
            question: this.state.newFAQQuestion,
            answer: this.state.newFAQAnswer,
        }
        this.props.composeFAQ(newFAQ)
        .then(() => {
            this.setState(
                {
                    showNewFAQWindow: false,
                    newFAQQuestion: '',
                    newFAQAnswer: '',
                }
            )
        })
        .then(() => this.props.fetchFAQs());
    }

    writeNewFAQ() {
        this.setState({
            showNewFAQWindow: true,
        })
    }

    renderNewFAQWindow() {
        return(
            <form>
            Question
            <textarea value = {this.state.newFAQQuestion} onChange = {this.updateField('newFAQQuestion')} />
            Answer
            <textarea value = {this.state.newFAQAnswer} onChange = {this.updateField('newFAQAnswer')}/>
            <button onClick = {this.handleSubmit}>Save new FAQ</button>
            </form>
        )
    }

    render() {
        if(!this.state.faqs) {
            return (null)
        }
        return(
            <>
            <div className = "faqs">
                <h2>Frequently Asked Questions</h2>
                {this.state.faqs.map(faq => (
                    <FAQAdminBox className = "faq" 
                    key = {faq._id} 
                    faq = {faq} 
                    edit = {this.props.updateFAQ}
                    delete = {this.props.deleteFAQ}
                    write = {this.props.composeFAQ} />
                ))}
            </div>
                <button type = "submit" onClick={() => this.writeNewFAQ()}>
                    Create New FAQ
                </button>
                {this.state.showNewFAQWindow ? this.renderNewFAQWindow() : null}
                </>
        )
    }
}

export default FAQs