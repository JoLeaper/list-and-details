export default (page) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(res => res.json());
};
