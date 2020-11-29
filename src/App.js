// in src/App.js
import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserCreate, UserEdit } from './components/Users';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import Dashboard from './components/Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
import customProvider from './customProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={customProvider} // dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="users"
      icon={UserIcon}
      create={UserCreate}
      list={UserList}
      edit={UserEdit}
    />
  </Admin>
);

export default App;
