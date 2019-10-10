import React from 'react';
import { Button, Card, Image, Placeholder } from 'semantic-ui-react';
import './TeamCard.css';

const TeamCard = props => {
  const { team } = props;

  return (
    <Card>
      {team.loaded ? (
        <Card.Content>
          <Image src="" />
        </Card.Content>
      ) : (
        <Card.Content>
          <Placeholder className="dashboard-placeholder-image">
            <Placeholder.Image rectangular />
          </Placeholder>
        </Card.Content>
      )}
      {team.loaded ? (
        <Card.Content>
          <Card.Header>Team Name</Card.Header>
          <Card.Meta>Team Sport</Card.Meta>
          <Card.Description>Next Game</Card.Description>
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
        <div className="ui two buttons">
          <Button
            disabled={!team.loaded}
            color={team.status === 'in' ? 'green' : 'grey'}
          >
            VIEW
          </Button>
        </div>
        {/* )} */}
      </Card.Content>
    </Card>
  );
};

export default TeamCard;
