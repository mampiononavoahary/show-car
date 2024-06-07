import {
    Show,
    SimpleShowLayout,
    TextField,
    RichTextField,
    ReferenceField,
  } from "react-admin";
  import {  Card, CardContent } from "@mui/material";
  
  const ShowCar = () => (
    <Show>
      <Card>
        <CardContent>
          <SimpleShowLayout>
            <TextField source="name" />
            <RichTextField source="brand" />
            <RichTextField source="power" />
              <TextField source="type " />
              <TextField source="model" />
              <TextField source="status" />
              <TextField source="price" />
          </SimpleShowLayout>
        </CardContent>
      </Card>
    </Show>
  );
  
  export default ShowCar;
  