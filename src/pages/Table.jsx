import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data: { results }, filter: { filters } } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

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
          {
            name.length === 0
              ? headerTable.map((planet) => (
                <tr key={ planet.name }>
                  {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
                </tr>
              )) : headerTable
                .filter((input) => input.name.toLowerCase().includes(name.toLowerCase()))
                .map((planet) => (
                  <tr key={ planet.name }>
                    {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
                  </tr>
                ))
          }
        </tbody>
      </table>
    );
  }
  return <p>Carregando...</p>;
}

export default Table;
