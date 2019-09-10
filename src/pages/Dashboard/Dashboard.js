import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import GameCard from '../../components/GameCard';
import './Dashboard.css';

const Dashboard = () => {
  const [lastGame, setLastGame] = useState({ loaded: false, finished: true });
  const [currentGame, setCurrentGame] = useState({ loaded: false });
  const [nextGame, setNextGame] = useState({ loaded: false });

  useEffect(() => {
    console.log('Getting last game!');
  });

  useEffect(() => {
    console.log('Getting current game!');
  });

  useEffect(() => {
    console.log('Getting next game!');
  });

  return (
    <Grid className="dashboard">
      <Grid.Row>
        <Grid.Column className="next-game" width={5}>
          <GameCard game={lastGame} />
        </Grid.Column>
        <Grid.Column className="next-game" width={5}>
          <GameCard game={currentGame} />
        </Grid.Column>
        <Grid.Column className="next-game" width={5}>
          <GameCard game={nextGame} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        View Profile, view teams, etc.
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
