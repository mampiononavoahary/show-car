import { Save } from "@mui/icons-material";
import { Button, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import img from "@/assets/images/1716955138152.jpg";
import {
  Create,
  TextInput,
  NumberInput,
  required,
  SimpleForm,
  FileInput,
  SaveButton,
  FormDataConsumer,
} from "react-admin";
import { CustomCreateButton } from "@/app/Helper/CustomerBtn";

const CustomSaveButton = (props: any) => (
  <Button variant="contained" color="primary" {...props}>
    Custom Save
  </Button>
);

const CustomToolbar = (props: any) => (
  <Grid container justifyContent={"flex-end"} pr={4}>
    <Toolbar {...props}>
      <SaveButton color="warning" label="Save" icon={<Save />} />
    </Toolbar>
  </Grid>
);
const UploadImages = ({ record }: any) => (
  <div>
    <h4>Télécharger des images</h4>
    <input type="file" multiple accept="image/*" />
  </div>
);
const CreateCar = () => (
  <Create>
    <SimpleForm
      toolbar={<CustomToolbar />}
      defaultValues={{ status: "AVAILABLE" }}
    >
      <Grid container>
        <Grid container item sm={6}>
          <Grid container justifyContent={"center"}>
            <Typography variant="h4" fontWeight={"bold"} fontFamily={"revert"}>
              Car Datails
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={6}
            mt={2}
            sx={{ overflowY: "auto" }}
            maxHeight={"80%"}
            minHeight={"80%"}
            boxShadow={"0 0 10px"}
          >
            <FormDataConsumer>
              {({ formData, ...rest }) => (
                <FileInput
                  source="images"
                  label="Images"
                  accept="image/*"
                  multiple
                  {...rest}
                >
                  <UploadImages />
                </FileInput>
              )}
            </FormDataConsumer>
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
            <Typography variant="h4" fontWeight={"bold"} fontFamily={"revert"}>
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
          <TextInput source="type" validate={[required()]} variant="outlined" />
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
  </Create>
);

export default CreateCar;
