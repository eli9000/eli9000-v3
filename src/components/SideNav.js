import react from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

/* ***************************************************************** */

const SideNav = ({ className, toggleSidenav }) => (
  <aside className={className} onClick={toggleSidenav}>
    <h1>Menu</h1>
    <ul>
      <li>Test1</li>
      <li>Test2</li>
      <li>Test3</li>
    </ul>
    <div>
      <span>Social Links</span>
    </div>
  </aside>
);
