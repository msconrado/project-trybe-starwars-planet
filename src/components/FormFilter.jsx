import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FormFilter() {
  const [change, setChange] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { filter, setFilter, setData, data, options, setOptions, notUsed,
    setNotUsed } = useContext(PlanetsContext);

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

    const filterComp = results.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      default:
        return planet[column] === value;
      }
    });

    const saveResult = results.filter((planet) => {
      const valueColumn = planet[column] === 'unknown' ? 0 : planet[column];
      switch (comparison) {
      case 'maior que':
        return Number(valueColumn) <= Number(value);
      case 'menor que':
        return Number(valueColumn) >= Number(value);
      default:
        return valueColumn !== value;
      }
    });

    setNotUsed({ ...notUsed, [change.column]: saveResult });

    setData({
      ...data,
      results: filterComp,
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
    <form className="row g-2 p-3">
      <div className="col-auto">
        <p className="col-form-label">Filtrar</p>
      </div>
      <div className="col-auto">
        <select
          className="form-select"
          data-testid="column-filter"
          name="column"
          id="column"
          onChange={ handleChange }
        >
          {options.map((col) => <option key={ col }>{col}</option>)}
        </select>
      </div>
      <div className="col-auto">
        <select
          className="form-select"
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div className="col-auto">
        <input
          style={ { width: '10em' } }
          className="form-control"
          data-testid="value-filter"
          type="number"
          name="value"
          id="value"
          value={ change.value }
          onChange={ handleChange }
        />
      </div>
      <div className="col-auto">
        <button
          className="btn btn-primary"
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default FormFilter;
