import React from 'react';
import Signup from './components/Signup';
import { selectUser } from './reduxStore/userSlice';
import { useSelector } from 'react-redux';
import Logout from './components/Logout';


function App() {
  const user = useSelector(selectUser)
  return (
    <div>
      {user ? <Logout /> : <Signup />}
    </div>
  );
}

export default App;
