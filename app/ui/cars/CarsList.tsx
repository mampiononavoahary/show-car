// CarsList.tsx

import * as React from "react";
import { List, Datagrid, TextField, Pagination, Button, EditButton } from "react-admin";
const CarsList: React.FC<any> = (props) => (
  <List {...props} pagination={<Pagination />}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="brand" />
      <TextField source="description" />
      <TextField source="model" />
      <TextField source="power" />
      <TextField source="price" />
      <EditButton label=""/>
    </Datagrid>
  </List>
);

export default CarsList;
