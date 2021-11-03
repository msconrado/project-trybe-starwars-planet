import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { FIRST, LAST } from '../global';

function SelectOrder() {
  const { filter, setFilter, data, setData } = useContext(PlanetsContext);

  const { order } = filter;
  const { results } = data;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilter({
      ...filter,
      order: {
        ...order,
        [name]: value,
      },
    });
  };

  const handleClick = () => {
    let sortTable = [];

    const { column, sort } = order;

    if (column === 'name') {
      sortTable = sort === 'ASC'
        ? results.sort((a, b) => (a.name > b.name ? FIRST : LAST))
        : results.sort((a, b) => (a.name < b.name ? FIRST : LAST));
    } else {
      sortTable = sort === 'ASC'
        ? results.sort((a, b) => Number(a[column]) - Number(b[column]))
        : results.sort((a, b) => Number(b[column]) - Number(a[column]));
    }
    setData({
      ...data,
      results: sortTable,
    });
  };

  return (
    <form>
      <select
        data-testid="column-sort"
        name="column"
        id="column"
        onChange={ handleChange }
      >
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="gravity">gravity</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
      </select>
      <label htmlFor="asc">
        Ascedente
        <input
          data-testid="column-sort-input-asc"
          value="ASC"
          type="radio"
          name="sort"
          id="asc"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          value="DESC"
          type="radio"
          name="sort"
          id="desc"
          onChange={ handleChange }
        />
      </label>
      <button
        onClick={ handleClick }
        data-testid="column-sort-button"
        type="button"
      >
        Ordenar
      </button>
    </form>
  );
}

export default SelectOrder;
