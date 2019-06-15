import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions';

const dialog = (state = { open: false, id_phone: 2 }, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        id_phone: 2,
        open: true
      };
    case CLOSE_DIALOG:
      return {
        open: false
      };
    default:
      return state;
  }
};

export default dialog;
