import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd'
import './styles.scss'

const LoadingPage = props => {
    return (
        <div className='loading-container'>
            <Icon type="loading" />
            <h2>Loading...</h2>
        </div>
    );
};

LoadingPage.propTypes = {
    
};

export default LoadingPage;