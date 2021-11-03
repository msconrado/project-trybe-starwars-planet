import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import PlanetsAPI from '../services/PlanetsAPI';
import { FIRST, LAST } from '../global';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const [notUsed, setNotUsed] = useState([]);

  const [optSelect, setOptSelect] = useState([]);

  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await PlanetsAPI();
      response.results.sort((a, b) => (a.name > b.name ? FIRST : LAST));
      setData(response);
      setOptSelect(Object.keys(response.results[0]));
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
    notUsed,
    setNotUsed,
    optSelect,
    setOptSelect,
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
