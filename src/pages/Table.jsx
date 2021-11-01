import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { results } = useContext(PlanetsContext);

  if (results !== undefined) {
    const headerTable = results.filter((planet) => delete planet.residents);

    return (
      <table>
        <thead>
          <tr>
            { Object.keys(headerTable[0]).map((header) => (
              <th key={ header }>{header.split('_').join(' ')}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {headerTable.map((planet) => (
            <tr key={ planet.name }>
              {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return <p>Carregando...</p>;
}

export default Table;
