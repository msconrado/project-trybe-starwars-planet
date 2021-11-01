import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FormFilter() {
  const { filter, setFilter, setData, data } = useContext(PlanetsContext);
  const { filterByNumericValues: filterValues } = filter;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          ...filterValues[0],
          [name]: value,
        },
      ],
    });
  };

  const handleClick = async () => {
    const { results } = data;
    const { column, comparison, value } = filterValues[0];
    const filterValue = results.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      default:
        return planet[column] === value;
      }
    });
    setData({
      ...data,
      results: filterValue,
    });
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        id="column"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        id="value"
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FormFilter;
