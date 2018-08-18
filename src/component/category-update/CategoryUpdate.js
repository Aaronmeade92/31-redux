import React, { Component, Fragment } from 'react';
import updateCategory from '../../actions/actions.js';
import { connect } from 'react-redux';



class CategoryUpdate extends Component {

    updateCategory = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onUpdate(this.state.name);
        this.setState({
            name: this.state.name
        })
    }

    onChange = event => {
        console.log(event.target)
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const changedBit = {
            [event.target.name]: val
        };
        this.setState(changedBit)
    };

    render() {
        return(
            <form onSubmit={this.updateCategory}>
                <h3>Edit Form</h3>
                <input name='name' placeholder='title' onChange={this.onChange} /><br/>
                <label>
                    <span></span>
                    <input name='budget' type='number' placeholder='0'/>
                </label><br/>
                <button >Edit Category</button>
            </form>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    addCategory: category => dispatch(addCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryUpdate);
