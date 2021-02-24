import React from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="Iris Leal"
        subTitle="Engineer"
        image={require('../assets/dow.jpg')}  />
    </Screen>
  );
}

export default AccountScreen;