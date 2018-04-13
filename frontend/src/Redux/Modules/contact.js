// Initial state of the feature



export function ContactAction(data) {
  switch (data.type) {
      case 'SEND_CONTACT_INFO':
      console.log(data.payload)
          return  {
              type: data.type,
              payload: data.payload
          };
      default:
          return (console.log('no action with that name'));
  }
}
