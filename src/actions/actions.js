import uuid from 'uuid/v1';

const defaultState = [];

export const createCategory = category => {
    return {
        type: 'CATEGORY_CREATE',
        payload: category,
    }
}

export const updateCategory = category => {
    return {
        type: 'CATEGORY_UPDATE',
        payload: category,
    }
}

export const destroyCategory = category => {
    return {
        type: 'CATEGORY_DESTROY',
    }
}