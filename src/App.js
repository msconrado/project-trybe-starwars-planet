import React from 'react';
import './App.css';
import Table from './pages/Table';
import PlanetsProvider from './context/PlanetsProvider';
import InputSearch from './components/InputSearch';
import FormFilter from './components/FormFilter';
import FiltersName from './components/FiltersName';
import SelectOrder from './components/SelectOrder';

function App() {
  return (
    <PlanetsProvider>
      <InputSearch />
      <FormFilter />
      <SelectOrder />
      <FiltersName />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
