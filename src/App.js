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
      <header className="container p-5">
        <h2 className="text-center">Project Star Wars</h2>
        <InputSearch />
      </header>
      <main>
        <FormFilter />
        <SelectOrder />
      </main>
      <FiltersName />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
