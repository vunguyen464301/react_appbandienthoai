import { queryPhone, queryCompany, sendData } from '../api';

export const SELECT_COMPANY = 'SELECT_COMPANY';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export const REQUESTS_PHONE = 'REQUESTS_PHONE';
export const RECEIVE_PHONE = 'RECEIVE_PHONE';
export const REMOVE_PHONE = 'REMOVE_PHONE';

export const SELECT_PHONE = 'SELECT_PHONE';

export const INSERT_PHONE_ORDER = 'INSERT_PHONE_ORDER';

export const insertphoneorder = (id_phone, numberphone, time) => ({
  type: INSERT_PHONE_ORDER,
  id_phone,
  numberphone,
  time
});

export const receivecompany = data => ({
  type: RECEIVE_COMPANY,
  ...data
});
export const selectcompany = id_company => ({
  type: SELECT_COMPANY,
  id_company
});
export const requestsphone = id_company => ({
  type: REQUESTS_PHONE,
  id_company
});
export const receivephone = data => ({
  type: RECEIVE_PHONE,
  ...data
});
export const selectphone = id_phone => ({
  type: SELECT_PHONE,
  id_phone
});
export const removephone = () => ({
  type: REMOVE_PHONE
});

export const fetchItemPhone = id_company => {
  /*
   * This function requests and receives the
   * weather data asynchronously.
   */
  return (dispatch, getState) => {
    dispatch(selectcompany(id_company));
    dispatch(requestsphone(id_company));
    queryPhone(id_company).then(data => {
      data.forEach(element => {
        dispatch(receivephone(element));
      });
    });
  };
};
export const sendDatatoPhoneOrder = () => {
  return (dispatch, getState) => {
//  let d=new Date();
//  let d=d.getDate();
    sendData();
  };
};
export const fetItemCompany = () => {
  return (dispatch, getState) => {
    queryCompany().then(data => {
      data.forEach(element => {
        dispatch(receivecompany(element));
      });
    });
  };
};

export const openDialog = id_phone => ({
  type: OPEN_DIALOG,
  id_phone
  //  return(dispatch,getState)=>{
  //  let d=new Date();
  //  let d=d.getDate();
  //  sendData();
  // }
});

export const closeDialog = () => ({
  type: CLOSE_DIALOG
});
