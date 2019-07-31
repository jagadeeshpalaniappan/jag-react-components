import React from 'react';
import JagTestComponentDefault from '../lib';
import {JagTestComponent1, JagTestComponent2} from '../lib';
import SimpleOffcanvasDemo from './SimpleOffcanvasDemo/SimpleOffcanvasDemo';

const App = () => (
    <div>
        <JagTestComponentDefault/>
        <hr/>
        <JagTestComponent1/>
        <hr/>
        <JagTestComponent2 color="salmon"/>
        <hr/>
        <SimpleOffcanvasDemo />
    </div>
);

export default App;
