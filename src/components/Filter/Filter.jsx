import { Component } from "react";

class Filter extends Component {
    render() {

        const { value, onChange } = this.props;

        return (
            <>
                <label htmlFor="filter">
                    <p>Find contacts by name</p>
                    <input type="text" name="filter" value={value} onChange={onChange}/>
                </label>
            </>
        )
    }
}

export { Filter };