import { Component } from "react";
import { nanoid } from 'nanoid'

class Form extends Component {
    
    state = {
        name: '',
        number: ''
    }

    onChangeName = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }

    onSubmitForm = (event) => {
    event.preventDefault();
    const id = nanoid().toString();
    const name = this.state.name.trim().toString();
    const number = this.state.number.trim().toString();
    const finalFormData = {id, name, number};
    this.props.onSubmit(finalFormData);
    this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    
    render() {

        return (
            <>
                <form onSubmit={this.onSubmitForm}>
                    <label htmlFor="name">
                        <span>Name</span>
                        <input type="text" name="name" value={this.state.name} onChange={this.onChangeName} required />
                    </label>
                    <label htmlFor="name">
                        <span>Name</span>
                        <input type="tel" name="number" value={this.state.number} onChange={this.onChangeName} required />
                    </label>
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
    }
}

export { Form };