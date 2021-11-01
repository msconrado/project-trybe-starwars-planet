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
    <form>
      <input
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
