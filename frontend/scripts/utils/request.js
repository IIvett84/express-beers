export async function get(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function post(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json' 
    }
  });

  const json = await response.json();
  return json;
}

export async function upload(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    body: data
  });

  const json = await response.json();
  return json;
}
