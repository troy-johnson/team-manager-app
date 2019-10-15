import React from 'react';
import {
  Accordion,
  Grid,
  Button,
  Card,
  Pagination,
  Image,
  Placeholder,
  Statistic,
  Table
} from 'semantic-ui-react';
import './GameCard.css';

const GameCard = props => {
  const { gameLoaded, game, gameError } = props;

  console.log('gamecard', props);

  const fullRosterStatus = [
    {
      key: 'full-roster-status',
      title: 'See Full Roster Status',
      content: {
        content: (
          <Table className="table" compact celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Position</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {gameLoaded && game && game.roster
                ? game.roster.map(player => {
                    return (
                      <Table.Row
                        positive={player.status === 'in' ? true : false}
                        negative={player.status === 'out' ? true : false}
                        key={player.id}
                      >
                        <Table.Cell>{player.name}</Table.Cell>
                        <Table.Cell>{player.position}</Table.Cell>
                      </Table.Row>
                    );
                  })
                : ''}
            </Table.Body>
          </Table>
        )
      }
    }
  ];

  return (
    <Card fluid style={{ maxWidth: '65%' }}>
      {/* {gameLoaded && game ? (
        <Placeholder className="dashboard-placeholder-image">
            <Placeholder.Image rectangular />
          </Placeholder>
      ) : (
        <Card.Content>
          <Placeholder className="dashboard-placeholder-image">
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      )} */}
      {gameLoaded && game ? (
        <Card.Content>
          <Card.Header className="teams" textAlign="center">
            {game.homeTeam} vs. {game.awayTeam}
          </Card.Header>
          <Card.Description textAlign="center">
            {game.location}
          </Card.Description>
          <Card.Description textAlign="center">
            {new Date(game.date).toLocaleString()}
          </Card.Description>
          <Grid columns={2} divided>
            <Grid.Row className="table-row">
              <Statistic color="green">
                <Statistic.Value>
                  {game.roster.filter(el => el.status === 'in').length}
                </Statistic.Value>
                <Statistic.Label>IN</Statistic.Label>
              </Statistic>
              <Statistic color="red">
                <Statistic.Value>
                  {game.roster.filter(el => el.status === 'out').length}
                </Statistic.Value>
                <Statistic.Label>OUT</Statistic.Label>
              </Statistic>
            </Grid.Row>
            <Grid.Row className="table-row">
              <Accordion defaultActiveIndex={-1} panels={fullRosterStatus} />
            </Grid.Row>
          </Grid>
        </Card.Content>
      ) : (
        <Card.Content>
          <Placeholder>
            <Placeholder.Line length="short" />
            <Placeholder.Line length="very long" />
            <Placeholder.Line length="medium" />
          </Placeholder>
        </Card.Content>
      )}
      <Card.Content extra>
        {game && game.date && game.date < Date.now() ? (
          <Statistic className="score" size="tiny">
            <Statistic.Label>Result</Statistic.Label>
            <Statistic.Value>Score</Statistic.Value>
          </Statistic>
        ) : game && game.finished ? (
          <Placeholder style={{ height: '35px', width: '100%' }}>
            <Placeholder.Image />
          </Placeholder>
        ) : (
          <div className="ui two buttons">
            <Button
              disabled={!gameLoaded}
              color={game && game.playerStatus === 'in' ? 'green' : 'grey'}
            >
              IN
            </Button>
            <Button
              disabled={!gameLoaded}
              color={game && game.playerStatus === 'out' ? 'red' : 'grey'}
            >
              OUT
            </Button>
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

export default GameCard;
