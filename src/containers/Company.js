import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
const Company = ({ id_company, company_name, actions }) => {
  return (
    <button
      onClick={() => {
        actions.fetchItemPhone(id_company);
        actions.removephone();
      }}
    >
      <div className='item-id_company'>{company_name}</div>
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Company);
