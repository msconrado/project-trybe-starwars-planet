import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsAPI from '../services/PlanetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
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
