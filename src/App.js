
//components
import React from 'react';
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import Login from './components/Login';
function App() {
  return (
  
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;