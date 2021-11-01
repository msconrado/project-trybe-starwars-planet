import React from 'react';
import './App.css';
import Table from './pages/Table';
import PlanetsProvider from './context/PlanetsProvider';
import InputSearch from './components/InputSearch';
import FormFilter from './components/FormFilter';

function App() {
  return (
    <PlanetsProvider>
      <InputSearch />
      <FormFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
