import React from 'react';
import ReactDOM from 'react-dom';
import PageNav from './pageNav';
import OverallView from './overall';

ReactDOM.render(
    <div className="page-wrapper">
        <PageNav />
        <div className="page-body">
            <OverallView />
        </div>
        <div className="page-footer">
            <div className="container">
                Copyright &copy; 2015 &middot; Built by <a href="https://github.com/neonmori" target="_blank">Neonphytismo</a>. A showcase of React + Flux + Babel + Elemental UI
            </div>
        </div>
    </div>
    ,
    document.getElementById(`app`)
);