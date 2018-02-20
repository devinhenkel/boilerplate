import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Portfolio!</h3>
            <NavLink to="/portfolio/1" activeClassName="isActive">Item 1</NavLink>
            <NavLink to="/portfolio/2" activeClassName="isActive">Item 2</NavLink>
            <p></p>
            <p>{props.match.params.id && 'This is item: ' + props.match.params.id}</p>
        </div>
    );
};

export default Portfolio;