export default function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TEXT':
            Object.assign({}, state, {
                text: action.payload
            }, ...state);
        break;
        default:
            return state;
    }
}