import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputSearch() {
  const { setFilter } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
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
        onChange={ handleChange }
      />
    </form>
  );
}

export default InputSearch;
