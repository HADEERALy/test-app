export const ENDPOINTS = {
  posts: {
    url: 'https://api.disneyapi.dev/characters',
    method: 'GET',
  },
  PostByID: {
    url: (id) => `https://api.disneyapi.dev/characters/${id}`,
    method: 'GET',
  },
};
