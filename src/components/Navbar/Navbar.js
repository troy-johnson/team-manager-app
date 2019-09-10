import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Menu, Placeholder } from 'semantic-ui-react';
import './Navbar.css';
import { useAuth0 } from '../../utils/auth0';

const Navbar = () => {
  const { user } = useAuth0();

  return (
    <div className="navbar">
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Placeholder style={{ height: 20, width: 20, marginRight: '20px' }}>
              <Placeholder.Image />
            </Placeholder>
            Team Manager
          </Menu.Item>
          <Menu.Item as={Link} to="/player">
            Player
          </Menu.Item>
          <Menu.Item as={Link} to="/games">
            Games
          </Menu.Item>
          <Menu.Item as={Link} to="/teams">
            Teams
          </Menu.Item>
          <div className="avatar">
            <Image
              className="image"
              src={user.picture}
              as={Link}
              to={`/user/${user.sub}`}
              avatar
            />
          </div>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
