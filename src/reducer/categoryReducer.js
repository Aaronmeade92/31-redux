let initialState = [{
        name: 'test',
        budget: 0,
}];


export default (state=initialState, action) => {

    if(initialState === undefined){
        return initialState;
    }

    let {type, payload} = action;

    switch(type) {
        case 'CATEGORY_CREATE': return [...state, payload]
        case 'CATEGORY_UPDATE': {
            console.log(action, 'this is my action')
            return state.map(category => category.id === payload.id ? payload : category)
        }
        case 'CATEGORY_DESTROY': return state.filter(category => category.id !== payload.id)
        default: return state;
    }
}