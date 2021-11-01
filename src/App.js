import React from 'react';
import './App.css';
import Table from './pages/Table';
import PlanetsProvider from './context/PlanetsProvider';
import InputSearch from './pages/InputSearch';

function App() {
  return (
    <PlanetsProvider>
      <InputSearch />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
