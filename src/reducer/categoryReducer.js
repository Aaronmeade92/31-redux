
let initialState = {};

export default (state=initialState, action) => {

    let {type, payload} = action

    switch(type) {
        case 'CATEGORY_CREATE': return [...state, payload]
        case 'CATEGORY_UPDATE': return state.map(category => category.id === payload.id ? payload : note)
        case 'CATEGORY_DESTROY': state.filter(category => category.id !== payload.id)
    }
}