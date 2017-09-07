import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { SubmitSuccess } from './FormSubmit';
import contact from '../assets/js/mailer';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            formErrors: { email: '', name: '', message: '' },
            submitSuccess: { success: false, failure: false},
            isSubmitting: false,
            emailValid: false,
            nameValid: false,
            messageValid: false,
            formValid: false
        }
    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let messageValid = this.state.messageValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Please enter a valid email address';
                break;
            case 'name':
                nameValid = value.length >= 2;
                fieldValidationErrors.name = nameValid ? '' : 'Your name must be at least 2 characters';
                break;
            case 'message':
                messageValid = value.length >= 1;
                fieldValidationErrors.message = messageValid ? '' : 'A message is required';
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid,
            messageValid: messageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.nameValid && this.state.messageValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({isSubmitting: true})
        contact({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message},
             ((err, data) => {
            let submitState;
            this.setState({isSubmitting: false})
            if (!err) {
                submitState = {success: true, failure: false};
                this.setState({ email: '', name: '', message: '' });
            } else {
                submitState = {success: false, failure: true};
            }
            this.setState({submitSuccess: submitState});
        })
        );
    };

    handleSubmit = this.handleSubmit.bind(this);
    render() {
        return (
            <form className="contactForm">
                <div className={this.state.isSubmitting ? "spinner" : ""}>
                    <FormErrors formErrors={this.state.formErrors} />
                    <SubmitSuccess submitSuccess={this.state.submitSuccess} />
                </div>
                <div className={`field ${this.errorClass(this.state.formErrors.name)}`}>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`field ${this.errorClass(this.state.formErrors.email)}`}>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={this.state.email}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`field ${this.errorClass(this.state.formErrors.message)}`}>
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="4" value={this.state.message}
                        onChange={this.handleUserInput}></textarea>
                </div>
                <ul className="actions">
                    <li><button type="submit" value="Send Message" onClick={this.handleSubmit} disabled={!this.state.formValid}>Send Message</button></li>
                </ul>
            </form>
        )
    }
}
export default Form;