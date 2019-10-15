import React, { useState, useEffect } from 'react';
import { Divider, Grid, Icon } from 'semantic-ui-react';
import { GameCard, TeamCard } from '../../components';
import './Dashboard.css';
import { useApi } from '../../utils/useApi';
import { getNextGame } from "../../api/GameService";
import { getUserTeams } from "../../api/TeamService";
const Dashboard = () => {
  const [gameLoaded, game, gameError] = useApi(getNextGame, {id: 1})
  const [teamsLoaded, teams, teamsError] = useApi(getUserTeams, {id: 1})

  console.log('teamsLoaded', teamsLoaded);
  console.log("teams", teams)
  console.log('gameLoaded', gameLoaded);
  console.log("game", game)

  return (
    <Grid className="dashboard">
      <Grid.Row>
        <Grid.Column className="next-game" width={12}>
          <GameCard gameLoaded={gameLoaded} game={game} gameError={gameError} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="next-game" width={12}>
          {teamsLoaded ? teams.map(team => {
            return <TeamCard key={team.name} team={team} />
          }) : ''}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
