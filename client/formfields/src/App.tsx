import React, { useEffect } from 'react';
import SignupForm from './Components/Pages/SignupForm';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <SignupForm />
  )
}

export default App;
