import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Pagination,
  ShowButton,
  useNotify,
  useRefresh,
  FunctionField,
  fetchUtils,
  DateField,
} from "react-admin";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import { IconArchive, IconCheck, IconDotsVertical, IconLayoutGridRemove, IconX } from "@tabler/icons-react";

const dataProvider: any = {
  update: async (id: any, status: any) => {
    console.log(`http://localhost:8080/appointments/${id}/${status}`);

    const { json } = await fetchUtils.fetchJson(
      `http://localhost:8080/appointments/${id}/${status}`,
      {
        method: "PUT",
      }
    );

    const updatedResource = json;

    return {
      data: updatedResource,
    };
  },
};

const ActionMenu: React.FC<{ record: any }> = ({ record }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const notify = useNotify();
  const refresh = useRefresh();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRejected = async () => {
    if (!record) return;

    try {
      const response = await dataProvider.update(record.id, "REJECTED"); // Correction du nom de la variable
      console.log(response);
      notify("Status updated to REJECTED");
      refresh();
    } catch (error: any) {
      notify(`Error: ${error.message}`);
    }
    handleClose();
  };
  const handleArcived = async () => {
    if (!record) return;

    try {
      const response = await dataProvider.update(record.id, "ARCHIVED"); // Correction du nom de la variable
      console.log(response);
      notify("Status updated to ARCHIVED");
      refresh();
    } catch (error: any) {
      notify(`Error: ${error.message}`);
    }
    handleClose();
  };
  const handleValidated = async () => {
    if (!record) return;

    try {
      const response = await dataProvider.update(record.id, "VALIDATED"); // Correction du nom de la variable
      console.log(response);
      notify("Status updated to VALIDATED");
      refresh();
    } catch (error: any) {
      notify(`Error: ${error.message}`);
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IconDotsVertical size={15} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >
          <ShowButton />
        </MenuItem>
        <MenuItem onClick={handleArcived}>
          <Button  variant="outlined" startIcon={<IconArchive  size={15}/>}>Arcived</Button>
        </MenuItem>
        <MenuItem onClick={handleValidated}>
          <Button  variant="outlined" startIcon={<IconCheck  size={15}/>}>Validated</Button>
        </MenuItem>
        <MenuItem onClick={handleRejected}>
        <Button  variant="outlined" startIcon={<IconX  size={15}/>}>Rejected</Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

const AppointList: React.FC<any> = (props) => (
  <List {...props} pagination={<Pagination />}>
    <Datagrid >
      <TextField source="email" />
      <TextField source="message" />
      <TextField source="contact" />
      <DateField 
              source="appointmentDate" 
              options={{ year: 'numeric', month: 'numeric', day: 'numeric' ,hour:"2-digit",minute:"numeric"}}
            />
      <TextField source="status" />
      <TextField source="car.name" />
      <FunctionField render={(record: any) => <ActionMenu record={record} />} />
    </Datagrid>
  </List>
);

export default AppointList;
