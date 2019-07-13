import React from 'react';
import ReactDOM from 'react-dom';
import JagTestComponent1 from './JagTestComponent1';

it('SideNav renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JagTestComponent1 />, div);
});
