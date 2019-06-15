const selectedPhone = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_PHONE':
      return action.id_phone;
    default:
      return state;
  }
};

export default selectedPhone;
