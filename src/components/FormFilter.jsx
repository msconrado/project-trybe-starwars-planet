import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FormFilter() {
  const { filter, setFilter, setData, data, options, setOptions, change, setChange,
  } = useContext(PlanetsContext);
  const { filterByNumericValues: filterValues } = filter;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setChange({
      ...change,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const { results } = data;
    const { column, comparison, value } = change;

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

    const optionColumn = options.filter((op) => op !== change.column);
    setOptions(optionColumn);

    setFilter({
      ...filter,
      filterByNumericValues: [
        ...filterValues,
        change,
      ],
    });

    setChange({
      column: optionColumn[0],
      comparison: 'maior que',
      value: 0,
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
        {options.map((col) => <option key={ col }>{col}</option>)}
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
