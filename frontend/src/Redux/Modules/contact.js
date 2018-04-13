// Initial state of the feature



export function ContactAction(data) {
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
