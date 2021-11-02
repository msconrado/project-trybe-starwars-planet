import React from 'react';
import './App.css';
import Table from './pages/Table';
import PlanetsProvider from './context/PlanetsProvider';
import InputSearch from './components/InputSearch';
import FormFilter from './components/FormFilter';
import NameFilters from './components/NameFilters';

function App() {
  return (
    <PlanetsProvider>
      <InputSearch />
      <FormFilter />
      <NameFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
