import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './SideNav';

it('SideNav renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideNav />, div);
});
