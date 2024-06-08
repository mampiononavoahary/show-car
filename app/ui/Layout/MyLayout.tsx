import React from 'react';
import { Layout } from 'react-admin';
import { AppLocationContext } from '@react-admin/ra-navigation';
import MyMenu from '../components/MyMenu';

const MyLayout = (props:any) => {
  return (
    <AppLocationContext>
      <Layout {...props} menu={MyMenu} />
    </AppLocationContext>
  );
};

export default MyLayout;
