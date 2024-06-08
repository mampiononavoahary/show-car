import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditApp = () => (
  <Edit>
    <SimpleForm>
        <TextInput source='status'/>
    </SimpleForm>
  </Edit>
);
export default EditApp;
