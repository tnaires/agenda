import React, { Component } from 'react';

class PersonForm extends Component {
  constructor(props) {
    super(props);

    this.state = { showErrors: false };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    const name = this.nameInput.value;
    const showErrors = name.trim() === '';
    this.setState({ showErrors });

    if (!showErrors) {
      this.props.addPerson(name);
      this.nameInput.value = '';
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        {this.state.showErrors &&
          <div>You need to inform the person's name.</div>
        }
        <form onSubmit={this.submitForm}>
          <input ref={ input => this.nameInput = input } />
          <input type="submit" value="Add person" />
        </form>
      </div>
    );
  }
}

export default PersonForm;
