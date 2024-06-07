import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  required,
  NumberInput,
} from "react-admin";
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomToolbar from "@/app/Helper/CustoTol";

const CarEdit = () => (
  <Edit>
      <SimpleForm
        defaultValues={{ status: "AVAILABLE" }}
      >
        <Grid container>
          <Grid container item sm={6}>
            <Grid container justifyContent={"center"}>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                fontFamily={"revert"}
              >
                Car Datails
              </Typography>
            </Grid>
            <Grid container sm={6} p={2}>
              <TextInput
                source="name"
                validate={[required()]}
                variant="outlined"
                fullWidth
              />
              <NumberInput
                source="price"
                validate={[required()]}
                variant="outlined"
                fullWidth
              />
              <TextInput
                source="description"
                multiline={true}
                label="Description"
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            sm={6}
            justifyContent={"space-evenly"}
            alignContent={"center"}
            borderLeft={"rgb(0,0,0,0.5) solid 1px"}
          >
            <Grid container justifyContent={"center"}>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                fontFamily={"revert"}
              >
                Car Spec
              </Typography>
            </Grid>
            <TextInput
              source="brand"
              validate={[required()]}
              variant="outlined"
            />
            <TextInput
              source="model"
              validate={[required()]}
              variant="outlined"
            />
            <TextInput
              source="color"
              validate={[required()]}
              variant="outlined"
            />
            <TextInput
              source="motorType"
              validate={[required()]}
              variant="outlined"
            />
            <TextInput
              source="type"
              validate={[required()]}
              variant="outlined"
            />
            <NumberInput
              source="power"
              validate={[required()]}
              variant="outlined"
            />
            <TextInput
              source="placeNumber"
              validate={[required()]}
              variant="outlined"
            />
            <TextInput
              style={{ display: "none" }}
              source="status"
              defaultValue="AVAILABLE"
            />
          </Grid>
        </Grid>
      </SimpleForm>
  </Edit>
);

export default CarEdit;
