import React from 'react';

import { Page } from 'react-onsenui';

import NavBar from './NavBar';

import List_Company from '../containers/List_Company';
import List_Phone from '../containers/List_Phone';

const MainPage = ({ navigator }) => (
  <Page
    renderToolbar={() => (
      <NavBar title='App Ban DT' navigator={navigator} />
    )}
  >
    <List_Company navigator={navigator} />
    <List_Phone navigator={navigator} />
  </Page>
);

export default MainPage;
