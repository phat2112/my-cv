import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'Components/atom/Navbar'
import './styles.scss'

// const IsLoadingComponent = Ư
const DashboardLayout = props => {
    return (
       <div className="Dashboard">
            <div className='dashboard-navbar'>
                <Navbar />
            </div>
            <div className="dashboard-content">
                {props.children}
            </div>
       </div> 
    );
};

DashboardLayout.propTypes = {
    
};

export default DashboardLayout;