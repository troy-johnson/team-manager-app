import React, { useState, useEffect } from 'react';
import { Divider, Grid, Header } from 'semantic-ui-react';
import { GameCard, TeamCard } from '../../components';
import './Dashboard.css';

const Dashboard = () => {
  const [game, setGame] = useState({ loaded: false });
  const [teams, setTeams] = useState({ loaded: false });

  useEffect(() => {
    console.log('Getting game!');
  });

  useEffect(() => {
    console.log('Getting teams!');
  });

  return (
    <Grid className="dashboard">
      <Grid.Row>
        <Grid.Column className="next-game" width={8}>
          <GameCard game={game} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="next-game" width={5}>
          <TeamCard team={teams.loaded} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
