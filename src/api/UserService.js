export const test = async (params, token) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response) {
    return response.json();
  } else {
    return { error: 'Oops! There was an error! Please try again.' };
  }
};
