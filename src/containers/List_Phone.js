import React from 'react';
import { connect } from 'react-redux';

import { List } from 'react-onsenui';

import Phone from './Phone';

const List_Phone = ({ phones, navigator }) => (
  <List
    dataSource={Object.keys(phones).map(key => phones[key])}
    renderRow={phone => (
      <div>
        <Phone key={phone.id_phone} navigator={navigator} {...phone} />
      </div>
    )}
  />
);

const mapStateToProps = state => ({
  phones: state.phones
});

export default connect(mapStateToProps)(List_Phone);
