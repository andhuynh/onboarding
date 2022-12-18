import React from 'react';
import Post from './Post';
import Form from './Form';
import './App.css';

function App() {
  return (
    <>
      <Post author="Farmer Bob" body="Farmers only" />
      <Form />
    </>
  );
}

export default App;
