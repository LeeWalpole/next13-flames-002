const fetch = require('isomorphic-unfetch');

export async function getProfiles() {
  const res = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles/');
  const data = await res.json();
  return data;
}
