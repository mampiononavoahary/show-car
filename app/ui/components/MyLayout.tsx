import { Layout } from 'react-admin';
import { AppLocationContext } from '@react-admin/ra-navigation';
import MyMenu from './MyMenu';

export const MyLayout = (props:any) => (
  <AppLocationContext>
    <Layout {...props} menu={MyMenu} />
  </AppLocationContext>
);