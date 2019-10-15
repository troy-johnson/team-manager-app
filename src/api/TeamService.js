export const getUserTeams = async (params, http) => {
  const response = await http.get('https://jsonplaceholder.typicode.com/todos/1');
  
  if (response) {
    // return response.json();
    return [{
      name: "BackSlash",
      sport: "Indoor Soccer",
    }];
  } else {
    return { error: 'Oops! There was an error! Please try again.' };
  }
};