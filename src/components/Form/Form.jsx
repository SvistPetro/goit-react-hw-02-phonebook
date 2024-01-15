import { Component } from "react";
import { nanoid } from 'nanoid'

class Form extends Component {
    
    state = {
        name: '',
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value});
      }

    onSubmitForm = (event) => {
    event.preventDefault();
    const id = nanoid().toString();
    const name = this.state.name;
    const finalFormData = {id, name};
    this.props.onSubmit(finalFormData);
    this.reset();
    }

    reset = () => {
        this.setState({
            name: ''
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
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
    }
}

export { Form };