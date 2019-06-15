import fetch from 'isomorphic-fetch';
import Promise from 'promise';

import { urlAPI } from '../util';

// const sendDatatoAPI = url => {
//   return fetch(url)
//     .then(response => {
//       if (response.status >= 400) {
//         return Promise.reject('Invalid response');
//       }
//       return response.text;
//     })
//     .then(text => {
//       console.log(text);
//     });
//  };

const getDatafromAPI = url => {
  return fetch(url)
    .then(response => {
      if (response.status >= 400) {
        return Promise.reject('Invalid response');
      }
      return response.json();
    })
    .then(json => {
      // if (parseInt(json.cod) !== 200) {
      //   let x=parseInt(json.cod);
      //   console.log(x);
      //   //out put NaN
      //   return Promise.reject('Invalid response');
      // }
      return json;
    });
};
export const sendData = () => {
  return fetch(
    urlAPI +
      'INSERT_Phone_ORDER.PHP?id_phone=2' +
      '&&numberphone=2323' +
      '&&time=1/1/2019'
  ).then(text => {
    console.log(text);
  });
};
export const queryPhone = id_company => {
  return getDatafromAPI(
    urlAPI() + 'READ_Phone_WHERE.php?id_company=' + id_company
  ).then(json => {
    return json;
  });
};
export const queryCompany = () => {
  return getDatafromAPI(urlAPI() + 'READ_Company.php').then(json => {
    return json;
  });
};
