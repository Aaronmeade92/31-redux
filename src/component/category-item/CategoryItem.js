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

    deleteCategory = (category) => {
        this.setState({
            editing: false
        });
        this.props.onRemove(this.props.category);
        console.log('deleted', this.props.category);
    }

    render(){
        return(
            <div>
                <span onClick={this.showEditForm}>{this.state.name}</span>
                <button onClick={this.deleteCategory}>X</button>
                {this.state.editing && <CategoryCreateForm onComplete={this.updateCategory} buttonText='update' category={this.props.category} />}
            </div>
        );
    }
}

CategoryItem.propTypes = {
    onComplete: PropTypes.func,
    onDelete: PropTypes.func,
    category: PropTypes.object,
}