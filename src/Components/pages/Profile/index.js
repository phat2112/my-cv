import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd'
import Jpweb from 'Assets/images/jpweb.png'
import Vitop from 'Assets/images/vitop.png'
import Gogi from 'Assets/images/gogi.png'
import University from 'Assets/images/science.jpg'
import MyImage from 'Assets/images/profile-image.jpg'
import './styles.scss'

const Profile = props => {
    return (
        <div className="profile">
           <div className="profile-title">
                <h1>My Profile</h1>
                <p>Fornt-end developer fresher</p>
           </div>
           <div className="profile-block">
                <div className="profile-infomation">
                    <div className="image-block">
                        <img src={MyImage} alt=""/>
                    </div>
                    <div className="profile-content">
                        <h1>Nguyễn Gia Phát</h1>
                        <p className='profile-location' ><Icon type="environment" /> Ho Chi Minh City, Viet Name</p>
                        <p>
                            I’m a fresher in Web  developer , I really interested in mobile app and web develop. 
                            I’m finding a chance to improve my skill, knowledge .
                            As well as to find the new environment, 
                            new place where I can learn much more about the technique  and gain my experience.  
                        </p>
                        <div className="profile-experience">
                            <div className="profile-experience-block">
                                <Icon type="experiment" />
                                <p>6 months Experience</p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-skill">
                    <div className="profile-skill-block">
                        <div className="profile-program">
                            <p>Html,Scss,Jquery</p>
                            <p>1 year</p>
                        </div>
                        <div className='profile-bar'>
                            <span className='profile-basicskill-bar'></span>
                        </div>
                    </div>
                    <div className="profile-skill-block">
                    <div className="profile-program">
                            <p>ReactJs</p>
                            <p>6 months</p>
                        </div>
                        <div className='profile-bar'>
                            <span className='profile-framework-bar'></span>
                        </div>
                    </div>
                </div>
                <div className="profile-education">
                    <div className="profile-education-block">
                        <h3>2017 -present</h3>
                        <div className="profile-education-location">
                            <p>University of Science</p>
                            <div className="profile-education-image">
                                <img src={University} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-job-experience">
                    <div className="profile-job-experience-block">
                        <div className="profile-experience-title">
                            <div></div>
                            <h3>3/2018 - 3/2019</h3>
                        </div>
                        <div className="profile-job-office">
                            <p>Services Assistant</p>
                            <div className="profile-job-office-location">
                                 <img src={Gogi} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="profile-job-experience-block">
                        <div className="profile-experience-title">
                            <div></div>
                            <h3>3/2019 - 6/2019</h3>
                        </div>
                        <div className="profile-job-office">
                            <p>Fresher Front end </p>
                            <div className="profile-job-office-location">
                                 <img src={Jpweb} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="profile-job-experience-block">
                        <div className="profile-experience-title">
                            <div></div>
                            <h3>9/2019 - 2/2020</h3>
                        </div>
                        <div className="profile-job-office">
                            <p>Fresher Front end </p>
                            <div className="profile-job-office-location">
                                 <img src={Vitop} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

Profile.propTypes = {
    
};

export default Profile;