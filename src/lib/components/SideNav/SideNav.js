import React from 'react';
import './SideNav.css';

const SideNav = () => (
    <div className="SecondExample">
        <p className="SecondExample-text">
            Side Nav Component {'\u00A0'}
            <a
                className="SecondExample-github-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/DimiMikadze/create-react-library"
            >
                Doc
            </a>
        </p>
    </div>
);

export default SideNav;
