const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name');
const b = document.querySelector('.blog');
const l = document.querySelector('.location');

async function data(username) {
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) {
  console.error('OH NO!');
  n.textContent = `Algo salió mal: ${err}`;
}

data(`${data.name}`).catch(handleError);