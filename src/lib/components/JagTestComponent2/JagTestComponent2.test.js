import React from 'react';
import ReactDOM from 'react-dom';
import JagTestComponent2 from './JagTestComponent2';

it('SideNav renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JagTestComponent2 />, div);
});
