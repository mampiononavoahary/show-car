import { Grid } from "@mui/material";
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const PostUser = () => {
  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextInput
              source="name"
              validate={[required()]}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextInput
              type="email"
              source="email"
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
