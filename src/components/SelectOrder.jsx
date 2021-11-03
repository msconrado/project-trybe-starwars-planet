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
    <form className="row g-2 p-3">
      <div className="col-auto">
        <p className="col-form-label">Ordenar</p>
      </div>
      <div className="col-auto">
        <select
          className="form-select"
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
      </div>
      <div
        style={ { padding: '7px 0px 0px 30px' } }
        className="col-auto form-check form-check-inline"
      >
        <label className="form-check-label" htmlFor="asc">
          <input
            className="form-check-input"
            data-testid="column-sort-input-asc"
            value="ASC"
            type="radio"
            name="sort"
            id="asc"
            onChange={ handleChange }
            defaultChecked
          />
          Ascedente
        </label>
      </div>
      <div
        style={ { paddingTop: '7px' } }
        className="col-auto form-check form-check-inline"
      >
        <label className="form-check-label" htmlFor="desc">
          <input
            className="form-check-input"
            data-testid="column-sort-input-desc"
            value="DESC"
            type="radio"
            name="sort"
            id="desc"
            onChange={ handleChange }
          />
          Descendente
        </label>
      </div>
      <div className="col-auto">
        <button
          className="btn btn-primary"
          onClick={ handleClick }
          data-testid="column-sort-button"
          type="button"
        >
          Ordenar
        </button>
      </div>
    </form>
  );
}

export default SelectOrder;
