import React from 'react';
import PasswordGenerator from '../components/Main/passwordGenerate';
import Navbar from '../components/Main/navbar'

const Home: React.FC = () => {
  return (
    <div>
        <Navbar/>
        <PasswordGenerator />
    </div>
  );
};

export default Home;