import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createCategory, updateCategory, destroyCategory} from '../../actions/actions.js';
import CategoryCreateForm from '../category-form/CategoryCreateForm.js';
import CategoryItem from '../category-item/CategoryItem.js';

const Dashboard = props => {
    return(
        <Fragment>
           <CategoryCreateForm onComplete={createCategory}/>
           <CategoryItem category={props.category} onComplete={props.updateCategory} onRemove={props.destroyCategory} />
        </Fragment>
    )
};

const mapStateToProps = (state) => ({category: state});

const mapDispatchToProps = (dispatch) => ({
    addCategory: category => dispatch(createCategory(category)),
    updateCategory: category => dispatch(updateCategory(category)),
    destroyCategory: category => dispatch(destroyCategory(category)),
});

Dashboard.propTypes = {
    createCategory: PropTypes.func,
    updateCategory: PropTypes.func,
    destroyCategory: PropTypes.func,
    category: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);