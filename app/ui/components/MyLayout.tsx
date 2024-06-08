import React from 'react';
import { MenuItemLink } from 'react-admin';

const MyMenu = () => {
  return (
    <div>
      <MenuItemLink to="/" primaryText="Home" />
      <MenuItemLink to="/posts" primaryText="Posts" />
      {/* Ajoutez d'autres éléments de menu ici */}
    </div>
  );
};

export default MyMenu;
