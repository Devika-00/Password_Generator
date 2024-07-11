import React from 'react';
import SavedPasswords from '../components/Main/savedPassword';
import Navbar from '../components/Main/navbar'

const PasswordList: React.FC = () => {
  return (
    <div>
        <Navbar/>
      <SavedPasswords />
    </div>
  );
};

export default PasswordList;
