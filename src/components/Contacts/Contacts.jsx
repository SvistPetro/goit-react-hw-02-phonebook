import { Component } from "react";
import { Contact } from "components/Contact/Contact";

class Contacts extends Component {

    render () {

        const { contacts } = this.props;

        return (
            <ul>
                {contacts.map(contact => {
                    return (
                        <Contact name={contact.name} key={contact.id}/>
                    );
                })}
            </ul>
        );
    }
}

export { Contacts };