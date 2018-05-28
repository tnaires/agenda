import React, { Component } from 'react';

class ContactTypeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { showErrors: false };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    const description = this.descriptionInput.value;
    const showErrors = description.trim() === '';
    this.setState({ showErrors });

    if (!showErrors) {
      this.props.addContactType(description);
      this.descriptionInput.value = '';
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.showErrors &&
          <div>You need to inform a contact type description.</div>
        }
        <form onSubmit={this.submitForm}>
          <input ref={ input => this.descriptionInput = input } />
          <input type="submit" value="Add contact type" />
        </form>
      </div>
    );
  }
}

export default ContactTypeForm;
