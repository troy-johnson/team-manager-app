export const test = async (params, token) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return await response.json();
}
