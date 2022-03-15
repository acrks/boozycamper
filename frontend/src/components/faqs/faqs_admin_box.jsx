import React from 'react';

class FAQAdminBox extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            faq: props.faq,
            question: props.faq.question,
            answer: props.faq.answer,
            editing: false,
            newFAQQuestion: props.faq.question,
            newFAQAnswer: props.faq.answer,
        }

        this.editFAQ = this.editFAQ.bind(this);
        this.deleteFAQ = this.deleteFAQ.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
    e.preventDefault();
        let editedFAQ = {
            id: this.props.faq._id,
            question: this.state.newFAQQuestion,
            answer: this.state.newFAQAnswer,
        }
        this.props.edit(editedFAQ)
        .then(() => this.props.fetchFAQs())
        .then(() => {
            this.setState(
                {
                    editing: false,
                    question: this.props.faq.question,
                    answer: this.props.faq.answer
                }
            )
        })        
    }

    editFAQ() {
        this.setState({
            editing: true
        })
    }

    deleteFAQ() {
        this.props.delete(this.state.faq._id)
        .then(() => this.props.fetchFAQs());
    }

    render() {
        if(this.state.editing) {
            return(
                <form>
                Question
                <textarea value = {this.state.newFAQQuestion} onChange = {this.updateField('newFAQQuestion')} />
                Answer
                <textarea value = {this.state.newFAQAnswer} onChange = {this.updateField('newFAQAnswer')}/>
                <button onClick = {this.handleSubmit}>Save updated FAQ</button>
                </form>
            )
        }
        else {
            return(
                <div className = "faq">
                    <h4>{this.state.question}</h4>
                    <p>{this.state.answer}</p>
                    <button type = "submit" onClick= {() => this.editFAQ()}>Edit FAQ</button>
                    <button type = "submit" onClick= {() => this.deleteFAQ()}>Delete FAQ</button>
                </div>
            )
        }
    }
}

export default FAQAdminBox