import React,{Component, Fragment} from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {createCategory, updateCategory, destroyCategory} from '../../actions/actions.js';
import CategoryItem from '../category-item/CategoryItem.js';

class CategoryCreateForm extends Component {

    constructor(props) {
        super(props);
        this.defaultState = {
        id: uuid(),
        timestamp: '',
        name: '',
        budget: 0,
        content: '',
        title: '',
        };
        this.state = {...this.defaultState};
    }


    onSubmit = e => {
        e.preventDefault();
        this.props.onComplete(this.state);
        console.log(this.state.name);
        this.setState({
            name: ''
        })
    };

    onChange = e => {
        const val = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const changedBit = {
            [event.target.name]: val
        };
        this.setState(changedBit);
    };

    render(){
        return(
            <React.Fragment>
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
                <input name='title' placeholder='title' value={this.state.name} /><br/>
                <textarea
                    name='content'
                    placeholder='content'
                    
                /><br/>
                <label>
                    <span></span>
                    <input name='budget' type='number' placeholder='0'/>
                </label>
                <button >Create Category</button>
            </form>
            <CategoryItem />
            </React.Fragment>
        )
    }
}

CategoryCreateForm.propTypes = {
    onComplete: PropTypes.func.isRequired,
    category: PropTypes.object,    
}

CategoryCreateForm.defaultProps = {
    category: {
        name: '',
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCategory: category => dispatch(addCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

export default connect(null, mapDispatchToProps)(CategoryCreateForm);