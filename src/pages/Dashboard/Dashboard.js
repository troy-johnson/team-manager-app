import React, { useState, useEffect } from 'react';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { GameCard, TeamCard } from '../../components';
import './Dashboard.css';
import { useApi } from '../../utils/useApi';
import { test } from '../../api/UserService';

const Dashboard = () => {
  const [game, setGame] = useState({ loaded: false });
  const [team, setTeams] = useState({ loaded: true });
  const [isLoading, data, error] = useApi(test, {id: 1})

  return (
    <Grid className="dashboard">
      <Grid.Row>
        <Grid.Column className="next-game" width={8}>
          <GameCard game={game} />
        </Grid.Column>
      </Grid.Row>
        <div>{isLoading ? 'Loading...' : data.title}</div>
      <Grid.Row>
        <Grid.Column className="next-game" width={5}>
          <TeamCard team={team} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
