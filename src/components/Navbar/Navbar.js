import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Placeholder
} from 'semantic-ui-react';
import './Navbar.css';
import { useAuth0 } from '../../utils/auth0';

const Navbar = () => {
  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0();

  const trigger = isAuthenticated ? (
    <Image src={user.picture} avatar />
  ) : (
    <div onClick={() => loginWithRedirect()}>Sign In</div>
  );

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

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
            <Dropdown trigger={trigger} pointing="top left" icon={null}>
              <Dropdown.Menu>
                <Dropdown.Header
                  icon="id card outline"
                  content={`${isAuthenticated ? user.nickname : ''}`}
                />
                <Dropdown.Divider />
                <Dropdown.Item
                  icon="user circle"
                  text="Profile"
                  as={Link}
                  to="/profile"
                />
                <Dropdown.Item
                  icon="sign out"
                  text="Sign Out"
                  onClick={() => logoutWithRedirect()}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
