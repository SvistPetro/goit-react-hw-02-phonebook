import { Component } from "react";
import { Form } from 'components/Form/Form';
import { Contacts } from "./Contacts/Contacts";

export class App extends Component {

  state = {
    contacts: [],
  }

  onSubmitFormHandler = formData => {
    if(this.state.contacts.length === 0) {
      this.setState({contacts: [formData]})
      return;
    }
    this.setState(prevState => {return {contacts: [...prevState.contacts, formData]}});
  }

  render() {

    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.onSubmitFormHandler}/>
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts}/>
      </div>
    );
  }
}
