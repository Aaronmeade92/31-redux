import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryCreateForm from '../category-form/CategoryCreateForm.js';
import {createCategory, updateCategory, destroyCategory} from '../../actions/actions.js';


export default class CategoryItem extends Component {

    state = {
        editing: false,
    }

    showEditForm = () => {
        this.setState({ editing: true })
    }

    deleteCategory = () => {
        this.setState({
            editing: false
        });
        this.props.onRemove(this.props.category);
        console.log('deleted', this.props.category);
    }

    render(){
        return(
            <div>
                <span onClick={this.showEditForm}>Category:{this.props.category.name}</span><br/>
                <span>Budget:{this.props.category.budget}</span><br/>
                <button onClick={this.deleteCategory}>X</button>
                {this.state.editing && <CategoryCreateForm onComplete={props.addCategory} buttonText='update' category={this.props.category} />}
            </div>
        );
    }
}

CategoryItem.propTypes = {
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
    category: PropTypes.object,
}