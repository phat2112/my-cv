import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './styles.scss'

const Navbar = () => {
    return (
        <div className="navbar">
             <div className='navbar-banner'>
                    <Icon type="project" />
                    <a href='https://drive.google.com/open?id=1Y6Xl4w9jjBaK0ICgn0hfQgzJdx-ARNVc'><Icon type="download" className='link-cv'/></a>
               </div>
            <div className="navbar-container">
                <div className="navbar-link">
                    <div className="navbar-item">
                        <Icon type="home" />
                        <Link to='/dashboard'>Home</Link>
                    </div>
                    <div className="navbar-item">
                        <Icon type="user" />
                        <Link to='/profile'>Profile</Link>
                    </div>
                    <div className="navbar-item">
                        <Icon type="book" />    
                        <Link to='/Project'>Project</Link>
                    </div>
                </div>
            </div>    
            <div className="navbar-contact">
                
                <div className="navbar-contact-item insta">
                    <Icon type="instagram" />
                </div>
                <div className="navbar-contact-item fb">
                    <Icon type="facebook" />
                </div>
                <div className="navbar-contact-item skype">
                    <Icon type="skype" />
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;