import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'material-ui/Button';
import Auth from '../Auth/Auth';

const login = (props) => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>Login</h1>
        <Auth />
        <Button component={Link} to="/cliente/registro" style={{margin: '10px 0'}}>
          Registro
        </Button>
      </div>
    </div>
  );
};

export default login;