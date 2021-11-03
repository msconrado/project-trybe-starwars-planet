import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data: { results }, filter: { filters } } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  if (results === undefined) return <p>Carregando...</p>;
  if (results.length === 0) return <p>No Planet found</p>;

  return (
    <table>
      <thead>
        <tr>
          { Object.keys(results[0]).map((header) => (
            <th key={ header }>{header.split('_').join(' ')}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          name.length === 0
            ? results.map((planet) => (
              <tr key={ planet.name }>
                {Object.values(planet).map((value) => (
                  planet.name === value
                    ? <td data-testid="planet-name" key={ value }>{value}</td>
                    : <td key={ value }>{value}</td>
                ))}
              </tr>
            ))
            : results
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

export default Table;
