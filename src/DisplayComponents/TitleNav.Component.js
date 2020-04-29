import React, {Component} from 'react';

import './TitleNav.css';

// Use Stateless Function for Title and Nav Ribbon
function TitleNav() {
    return (
      <div className="TitleNav">   
        <div className="wrapper"> 
            <div className="col Padding"> 
                <div></div>
            </div>
            <div className="col Title"> 
                <div> U L T R A  W E A L T H </div>
            </div>
            <div className="col MenuBtn"> 
                <div className="hamburger"> ☰ </div>
            </div>
        </div>     
      </div>
    );
}

export default TitleNav;