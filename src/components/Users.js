import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  PasswordInput,
  Edit,
} from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="last_name" />
      <TextField source="first_name" />
      <EmailField source="email" />
      <MyUrlField source="website" />
    </Datagrid>
  </List>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" />
      <PasswordInput source="password" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <TextInput source="email" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);
