export default function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_TEXT':
      return Object.assign({}, state, {
        text: action.payload
      }, ...state);
    default:
      return state;
  }
}