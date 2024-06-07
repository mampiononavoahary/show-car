import { Avatar, Grid } from "@mui/material";

import {
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import Image from "next/image";

const PostUser = () => {
  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={6}>
            <TextInput
              source="name"
              label="Name"
              validate={[required()]}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextInput
              type="email"
              source="email"
              label="Email"
              validate={[required()]}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              source="password"
              type="password"
              label="Password"
              validate={[required()]}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default PostUser;
