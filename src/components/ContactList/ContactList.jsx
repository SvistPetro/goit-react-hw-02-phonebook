import { Component } from "react";

class ContactList extends Component {

    render () {

        const { contacts, onDelete } = this.props;

        return (
            <ul>
                {contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <span>{contact.name}:</span>
                            <span>{contact.number}</span>
                            <button onClick={() => onDelete(contact.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export { ContactList };