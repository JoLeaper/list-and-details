export default (characterName) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterName}`)
    .then(res => res.json());
};
