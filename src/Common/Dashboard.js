
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import RenderContent from './Render';



const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };
  
  return (
    <div className='container-fluid'> 
      <Sidebar changeTab={handleTabChange} activeTab={activeTab} />
      {RenderContent(activeTab)} {/* Pass activeTab as parameter to renderContent */}
    </div>
  );
};

export default Dashboard;
