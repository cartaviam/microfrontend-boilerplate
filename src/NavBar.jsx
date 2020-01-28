// @flow
import React from 'react';
import { NavLink, withRouter }  from 'react-router-dom';

type Props = {
  location: Object
};

class NavBar extends React.Component<Props> {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item `${this.getNavLinkClass('/hotels')}`">
                            <NavLink className="nav-link" to='/hotels' >Hotels</NavLink>
                        </li>
                        <li className="nav-item `${this.getNavLinkClass('/guests')}`">
                            <NavLink className="nav-link" to='/guests' >Guests</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);