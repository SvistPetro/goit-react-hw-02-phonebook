import { Component } from "react";

class Contact extends Component {
    render () {

        const { name, id } = this.props;

        return (
            <li key={id}>{name}</li>
        );
    }
}

export {Contact};