const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER/AUTHENTICATE':
        return {
          ...state,
          username: action.credentials.username,
        };
      default:
        return state;
    }
  };
  
  export default reducer;