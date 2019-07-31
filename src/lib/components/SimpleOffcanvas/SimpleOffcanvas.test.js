import React from 'react';
import ReactDOM from 'react-dom';
import SimpleOffcanvas from './JagTestComponent1';

it('SideNav renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleOffcanvas />, div);
});
