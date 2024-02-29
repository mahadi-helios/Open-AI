import React from "react";
import Playground from "../componnet/Playground";
import Assistants from "../componnet/Assistants";
import FineTuning from "../componnet/Tuning";
import ApiKeys from "../componnet/ApiKeys";
import Storage from "../componnet/Storage";
import Usage from "../componnet/Usage";
import Document from "../componnet/Document";
import Help from "../componnet/Help";
import Home from "../componnet/Home";
import Organization from "../componnet/Settings/Organization";
import TeamContent from "../componnet/Settings/Team";

const RenderContent = (activeTab) => { 
  switch (activeTab) {
    case 'Home':
      return <Home />;
    case 'playgrounds':
      return <Playground />;
    case 'assistants':
      return <Assistants />;
    case 'tunning':
      return <FineTuning />;
    case 'api':
      return <ApiKeys />;
    case 'Storage':
      return <Storage />;
    case 'usage': 
      return <Usage />;  
    case 'Organization':
      return <Organization/>;   
    case 'Teams':
      return <TeamContent/>;   
    case 'Documentation':
      return <Document />;  
    case 'Help':
      return <Help />;  
    // case 'Team':
    //   return <Setting />;    
    default:
      return null;
  }
}

export default RenderContent;