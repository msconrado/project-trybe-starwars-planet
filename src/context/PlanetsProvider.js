import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsAPI from '../services/PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const [savingResult, setSavingResult] = useState([]);

  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const [change, setChange] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await PlanetsAPI();
      setData(response);
    };
    fetchAPI();
  }, []);

  const value = {
    data,
    setData,
    filter,
    setFilter,
    options,
    setOptions,
    change,
    setChange,
    savingResult,
    setSavingResult,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlanetsProvider;
