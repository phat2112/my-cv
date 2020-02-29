import React from "react";
import PropTypes from "prop-types";
import Project1 from "Assets/images/my-project-1.png";
import Project2 from "Assets/images/my-project-2.png";
import { Icon } from "antd";
import { Tabs } from "antd";
import "./styles.scss";

const Project = props => {
  const { TabPane } = Tabs;
  return (
    <div className="project">
      <h1 style={{ textAlign: "center" }}>Project</h1>
      <div className="project-container">
        <Tabs defaultActiveKey="1">
          <TabPane tab="All" key="1" style={{ height: 200 }}>
            <div className="project-list first-project">
              <div className="project-list-item">
                <img src={Project1} alt="" />
                <span className="project-list-showinfo">
                  <Icon type="search" />
                </span>
                <div className="project-list-content">
                  <h1>Plant Smart</h1>
                  <div className="project-list-detail">
                    <h4>Description:</h4>
                    <p>
                      An app which supply the machine and worker for some user
                      who pay for it.
                    </p>
                  </div>
                  <div className="project-list-detail">
                    <h4 style={{ marginRight: 48 + "px" }}>Role:</h4>
                    <p>Front-end-developer</p>
                  </div>
                  <div className="project-list-detail">
                    <h4>Technology:</h4>
                    <p>
                      Html,Scss,Reactjs for user interface, Redux for call api
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-list-item sec-project">
                <img src={Project2} alt="" />
                <span className="project-list-showinfo">
                  <Icon type="search" />
                </span>
                <div className="project-list-content">
                  <h1>Shop Cart-Personal Project</h1>
                  <div className="project-list-detail">
                    <h4>Description:</h4>
                    <p>
                      This is an app it has some action, add or remove item and
                      calculate total of cart.
                    </p>
                  </div>
                  <div className="project-list-detail">
                    <h4>Technology:</h4>
                    <p>
                      Html,Scss,Reactjs for user interface, Redux for call api
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Project" key="2" style={{marginLeft: 160 + 'px'}}>
            <div className="project-list-item project-tab">
              <img src={Project1} alt="" />
              <span className="project-list-showinfo">
                <Icon type="search" />
              </span>
              <div className="project-list-content">
                <h1>Plant Smart</h1>
                <div className="project-list-detail">
                  <h4>Description:</h4>
                  <p>
                    An app which supply the machine and worker for some user who
                    pay for it.
                  </p>
                </div>
                <div className="project-list-detail">
                  <h4 style={{ marginRight: 48 + "px" }}>Role:</h4>
                  <p>Front-end-developer</p>
                </div>
                <div className="project-list-detail">
                  <h4>Technology:</h4>
                  <p>
                    Html,Scss,Reactjs for user interface, Redux for call api
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Personal Project" key="3">
            <div className="project-list-item project-tab">
              <img src={Project2} alt="" />
              <span className="project-list-showinfo">
                <Icon type="search" />
              </span>
              <div className="project-list-content">
                <h1>Shop Cart-Personal Project</h1>
                <div className="project-list-detail">
                  <h4>Description:</h4>
                  <p>
                    This is an app it has some action, add or remove item and
                    calculate total of cart.
                  </p>
                </div>
                <div className="project-list-detail">
                  <h4>Technology:</h4>
                  <p>
                    Html,Scss,Reactjs for user interface, Redux for call api
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
    // <div className="project">
    //     <h1 style={{textAlign: 'center'}}>Project</h1>
    //     <div className="project-container">
    //         <div className="project-status">
    //             <button>All </button>
    //         </div>
    //         <div className="project-list first-project">
    //             <div className="project-list-item">
    //                 <img src={Project1} alt=""/>
    //                 <span className="project-list-showinfo"><Icon type="search" /></span>
    //                 <div className="project-list-content">
    //                     <h1>Plant Smart</h1>
    //                     <div className="project-list-detail">
    //                         <h4>Description:</h4>
    //                         <p>An app which supply the machine and worker for some user who pay for it.</p>
    //                     </div>
    //                     <div className="project-list-detail">
    //                         <h4 style={{ marginRight: 48 + 'px'}}>Role:</h4>
    //                         <p>Front-end-developer</p>
    //                     </div>
    //                     <div className="project-list-detail">
    //                         <h4>Technology:</h4>
    //                         <p>Html,Scss,Reactjs for user interface, Redux for call api</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="project-list-item sec-project">
    //                 <img src={Project2} alt=""/>
    //                 <span className="project-list-showinfo"><Icon type="search" /></span>
    //                 <div className="project-list-content">
    //                     <h1>Shop Cart-Personal Project</h1>
    //                     <div className="project-list-detail">
    //                         <h4>Description:</h4>
    //                         <p>This is an app it has some action, add or remove item and calculate total of cart.</p>
    //                     </div>
    //                     <div className="project-list-detail">
    //                         <h4>Technology:</h4>
    //                         <p>Html,Scss,Reactjs for user interface, Redux for call api</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

Project.propTypes = {};

export default Project;
