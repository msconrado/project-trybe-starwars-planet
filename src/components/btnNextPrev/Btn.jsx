import React, { useContext, useState } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import PlanetsAPI from '../../services/PlanetsAPI';

function Btn() {
  const [numPage, setNumPage] = useState(1);

  const { data, setData } = useContext(PlanetsContext);

  const { next, previous } = data;

  const handleClick = async (param, value) => {
    const page = param.split('?')[1];
    const response = await PlanetsAPI(page);
    const num = value === '+' ? numPage + 1 : numPage - 1;

    setNumPage(num);
    setData(response);
  };

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <div className="flex-column">
        <button
          className="btn btn-success"
          disabled={ previous === null }
          type="button"
          onClick={ () => handleClick(previous) }
        >
          Previous

        </button>
        <button
          className="btn btn-success"
          disabled={ next === null }
          type="button"
          onClick={ () => handleClick(next, '+') }
        >
          Next
        </button>
        <h4 className="mt-5 ms-5">
          Pagina
          {' '}
          <span>{numPage}</span>
        </h4>
      </div>
    </div>
  );
}

export default Btn;
