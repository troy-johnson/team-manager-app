import React from 'react';
import { Button, Card, Image, Placeholder, Statistic } from 'semantic-ui-react';
import './GameCard.css';

const GameCard = props => {
  const { game } = props;

  return (
    <Card>
      {game.loaded ? (
        <Image src="" />
      ) : (
        <Card.Content>
          <Placeholder className="dashboard-placeholder-image">
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      )}
      {game.loaded ? (
        <Card.Content>
          <Card.Header>Team 1 Name vs Team 2 Name</Card.Header>
          <Card.Meta>Game Location</Card.Meta>
          <Card.Description>Game Datetime</Card.Description>
          <Card.Description>Roster Status</Card.Description>
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
        ) : !game.loaded && game.finished ? (
          <Placeholder style={{ height: "35px", width: "100%" }}>
            <Placeholder.Image />
          </Placeholder>
        ) : (
          <div className="ui two buttons">
            <Button
              disabled={!game.loaded}
              color={game.status === 'in' ? 'green' : 'grey'}
            >
              IN
            </Button>
            <Button
              disabled={!game.loaded}
              color={game.status === 'out' ? 'red' : 'grey'}
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
