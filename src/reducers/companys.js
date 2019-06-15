import { RECEIVE_COMPANY } from '../actions';

const company = action => {
  return {
    id_company: action.id_company,
    company_name: action.company_name
  };
};

const companys = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMPANY:
      return {
        ...state,
        [action.id_company]: company(action)
      };
    default:
      return state;
  }
};

export default companys;
