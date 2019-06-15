import React from 'react';
import { connect } from 'react-redux';

import { List } from 'react-onsenui';

import Company from './Company';

const List_Company = ({ companys, navigator }) => (
  <List
    dataSource={Object.keys(companys).map(key => companys[key])}
    renderRow={company => (
      <Company key={company.id_company} navigator={navigator} {...company} />
    )}
  />
);

const mapStateToProps = state => ({
  companys: state.companys
});

export default connect(mapStateToProps)(List_Company);
