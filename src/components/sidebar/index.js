import React from 'react';
import { Container } from './style';

const Sidebar = () => (
  <Container>
    {' '}
    <ul>
      <li>
        <img src="https://avatars0.githubusercontent.com/u/22628987?v=4" alt="img" />
        <div id="description">
          <p> Ilton Karly</p>
          <span>iltonkp</span>
        </div>
        <button type="button">x</button>
        <span> > </span>
      </li>
    </ul>
  </Container>
);

export default Sidebar;
