import React from 'react';
import FullName from './components/Portfile/FullName';
import Address from './components/Portfile/Address';
import ProfilePcture from './components/Portfile/ProfilePcture';
import './App.css';

function App() {
  return (
    <div className="App">
     <FullName />
     <Address/>
     <ProfilePcture/>
    </div>);
  
}

export default App;
