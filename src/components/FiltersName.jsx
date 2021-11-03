import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FiltersName() {
  const { data, setData, notUsed, filter, setFilter,
    options, setOptions } = useContext(PlanetsContext);

  const { filterByNumericValues: filterNum } = filter;

  const handleClick = ({ target }) => {
    const { id } = target;

    setData({
      ...data,
      results: data.results.concat(notUsed[id]),
    });

    setOptions(options.concat(id));

    const values = filterNum.filter((filt) => filt.column !== id);
    setFilter({
      ...filter,
      filterByNumericValues: values,
    });
  };

  return (
    <div>
      {filterNum.map(({ column, comparison, value }, index) => (
        <div data-testid="filter" key={ index }>
          <p>
            {column}
            {' '}
            {comparison}
            {' '}
            {value}
            {' '}
            <button id={ column } onClick={ handleClick } type="button">
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default FiltersName;
