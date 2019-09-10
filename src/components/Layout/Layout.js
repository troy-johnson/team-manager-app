import React, { Component, useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const Layout = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (name) => (setActiveItem(name))

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick('home')}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick('messages')}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick('friends')}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick('logout')}
          />
        </Menu.Menu>
      </Menu>

      <Segment>
        <img src='/images/wireframe/media-paragraph.png' />
      </Segment>
    </div>
  )
}

export default Layout;
