import React from 'react';
import './JagTestComponent2.css';

const JagTestComponent2 = (props) => (
    <div className="container">
        <h3>JagTestComponent2</h3>
        <p style={{color: props.color}}>This is test component</p>
    </div>
);

export default JagTestComponent2;
