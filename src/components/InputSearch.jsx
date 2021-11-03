import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputSearch() {
  const { filter, setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <form className="row d-flex justify-content-center pt-2">
      <input
        className="form-control w-25 p-2"
        data-testid="name-filter"
        type="text"
        name="name"
        id="name"
        placeholder="Filtrar por nome"
        onChange={ handleChange }
      />
    </form>
  );
}

export default InputSearch;
