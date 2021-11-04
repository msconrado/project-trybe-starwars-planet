const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets';

const PlanetsAPI = async (page) => {
  const api = await fetch(`${planetsURL}?${page}`);
  const json = await api.json();
  json.results.filter((planet) => delete planet.residents);
  return json;
};

export default PlanetsAPI;
