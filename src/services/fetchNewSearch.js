export default (characterId) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`)
    .then(res => res.json());
};
