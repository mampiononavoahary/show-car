import { Card, CardContent, Avatar } from '@mui/material';
import { Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from "react-admin";


const ShowUser = () => (
  <Show>
    <Card>
      <CardContent>
        <SimpleShowLayout>
            
          <TextField source="name" />
          <TextField source="email" />
        </SimpleShowLayout>
      </CardContent>
    </Card>
  </Show>
);
export default ShowUser;
