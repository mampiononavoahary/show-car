// CarsList.tsx

import { Avatar, Box, Grid } from "@mui/material";
import * as React from "react";
import PersonIcon from '@mui/icons-material/Person';
import {
  List,
  Datagrid,
  TextField,
  Pagination,
} from "react-admin";

const UserList: React.FC<any> = (props) => (
    <List {...props} pagination={<Pagination />}>
      <Datagrid rowClick="show">
      <Box display="flex" alignItems="center">
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Box ml={2}>
              <TextField source="name" label="User"/>
            </Box>
          </Box>
          <TextField source="email" />
      </Datagrid>
    </List>
);

export default UserList;
