export const getNextGame = async (params, token) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response) {
    // return response.json();
    return {
      homeTeam: 'BackSlash',
      awayTeam: 'Les Bleus',
      location: 'Gardner Village',
      date: new Date('October 30, 2019'),
      homeTeamGoals: null,
      awayTeamGoals: null,
      playerStatus: 'in',
      roster: [
        { name: '1', id: 1, position: 'Keeper', status: 'in' },
        { name: '2', id: 2, position: 'Field', status: 'in' },
        { name: '3', id: 3, position: 'Field', status: 'out'},
        { name: '4', id: 4, position: 'Keeper', status: 'in' },
        { name: '5', id: 5, position: 'Field', status: 'in' },
        { name: '6', id: 6, position: 'Field', status: 'out'},
        { name: '7', id: 7, position: 'Keeper', status: 'in' },
        { name: '8', id: 8, position: 'Field', status: 'in' },
        { name: '9', id: 9, position: 'Field', status: 'out'},
        { name: '10', id: 10, position: 'Keeper', status: 'in' },
        { name: '11', id: 11, position: 'Field', status: 'in' },
        { name: '12', id: 12, position: 'Field', status: 'out'}
      ]
    };
  } else {
    return { error: 'Oops! There was an error! Please try again.' };
  }
};
