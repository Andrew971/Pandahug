// Initial state of the feature
const initialState = {
  result: []
};

export function SearchReducer(state = initialState, action) {
  switch (action.type) {
      case 'SEARCH_RESULT':
          return  {
              ...state,
              result: action.payload
          };
      default:
          return state;
  }
}

export function SearchAction(data) {
  switch (data.type) {
      case 'CHANGE_DATE':
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
