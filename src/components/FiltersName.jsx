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
    <div className="bg-dark" style={ { width: '20em' } }>
      {filterNum.map(({ column, comparison, value }, index) => (
        <div
          className="btn-toolbar justify-content-between mt-3"
          data-testid="filter"
          key={ index }
        >
          <p className="text-white">
            {column}
            {' '}
            {comparison}
            {' '}
            {value}
            {' '}
          </p>
          <button
            className="btn-close btn-close-white"
            id={ column }
            onClick={ handleClick }
            type="button"
            aria-label="x"
          />
        </div>
      ))}
    </div>
  );
}

export default FiltersName;
