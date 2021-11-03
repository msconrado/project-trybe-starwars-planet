const planetsURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const PlanetsAPI = async () => {
  const api = await fetch(planetsURL);
  const json = await api.json();
  json.results.filter((planet) => delete planet.residents);
  return json;
};

export default PlanetsAPI;
