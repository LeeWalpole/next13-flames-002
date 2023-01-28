const fetch = require('isomorphic-unfetch');

export async function getProfiles() {
  const res = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles?grab=99');
  const data = await res.json();
  return data;
}
