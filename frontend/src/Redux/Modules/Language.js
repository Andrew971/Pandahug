// Initial state of the feature
const initialState = {
  target: 'EN'
};

export function LanguageReducer(state = initialState, action) {
  switch (action.type) {
      case 'CHANGE_LANG':
          return  {
              ...state,
              target: action.payload
          };
      default:
          return state;
  }
}

export function LanguageAction(data) {
  switch (data.type) {
      case 'CHANGE_LANG':
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
