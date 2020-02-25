import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Background from 'Assets/images/background.jpg'
import {useHistory} from 'react-router-dom'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import './styles.scss'
import LoadingPage from 'Components/atom/LoadingPage'

const Home = props => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const handleLinkProfile = () => {
        setLoading(true)
        setTimeout(() => {
            history.push('/profile')
        },800)
    }
    return (
        <div className='home-background'>
            {loading ? (<LoadingPage />) : ''}
           <div className="home-image">
                <img src={Background} alt=""/>
           </div>
            <div className="home-content">
                <h1>Profile Project</h1>
                <p>Hi there, I'm Phat Nguyen, I'm looking for some interesting job in Front-end developer</p>
                <button onClick={() => handleLinkProfile()}>See some more information <Icon type="arrow-right" /> </button>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;