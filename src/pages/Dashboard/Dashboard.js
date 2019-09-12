import React, { useState, useEffect } from 'react';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { GameCard, TeamCard } from '../../components';
import './Dashboard.css';
import { useAuth0 } from '../../utils/auth0';

const Dashboard = () => {
  const [game, setGame] = useState({ loaded: false });
  const [teams, setTeams] = useState({ loaded: false });
  const [apiMessage, setApiMessage] = useState("");
  const { request } = useAuth0();

  const apiCall = async () => {
    try {
      const response = await request('https://jsonplaceholder.typicode.com/todos/1', 'GET');
      const responseData = await response.json();
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    apiCall();
  }, [])

  return (
    <Grid className="dashboard">
      <Grid.Row>
        <Grid.Column className="next-game" width={8}>
          <GameCard game={game} />
        </Grid.Column>
      </Grid.Row>
        <div>{apiMessage.title}</div>
      <Grid.Row>
        <Grid.Column className="next-game" width={5}>
          <TeamCard team={teams.loaded} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
