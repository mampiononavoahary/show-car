import * as React from "react";
import { List, Datagrid, TextField, Button, EditButton, Pagination } from 'react-admin';
const AppointList: React.FC<any> = (props) => (
  <List {...props} pagination={<Pagination />}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="firstName" />
      <TextField source="email" />
      <TextField source="message" />
      <TextField source="contact" />
      <TextField source="appointmentDate" />
      <TextField source="status" />
      <TextField source="car.name" />
      <EditButton label=""/>
    </Datagrid>
  </List>
);

export default AppointList;
