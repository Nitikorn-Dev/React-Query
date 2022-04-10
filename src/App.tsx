import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import UserDetail from './UserDetail';


function App() {
  const [userId, setUserId] = React.useState("");
  return (
    <div className="App" style={{ display: 'flex' }}>
      <div style={{ padding: 20, width: '30%', borderRight: '2px solid' }}>
        <User setUserId={setUserId} />
      </div>
      <div style={{ padding: 20, width: '70%' }}>
        <UserDetail userId={userId} />
      </div>

    </div>
  );
}

export default App;
