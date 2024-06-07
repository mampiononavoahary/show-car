// CarsList.tsx

import { Grid } from "@mui/material";
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Pagination,
  Button,
  EditButton,
} from "react-admin";

const UserList: React.FC<any> = (props) => (
    <List {...props} pagination={<Pagination />}>
      <Datagrid >
        <TextField source="name" />
        <TextField source="email" />
        {/* <EditButton label="" /> */}
      </Datagrid>
    </List>
);

export default UserList;
