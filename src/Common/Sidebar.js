import React, { useState } from 'react';
import { SiOpenai } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { LiaRobotSolid } from "react-icons/lia";
import { LuSettings2 } from "react-icons/lu";
import { FaLock } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { ImStatsBars2 } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { LuBook } from "react-icons/lu";
import { IoIosHelpBuoy } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";

const Sidebar = ({ changeTab }) => {
    const [submenu, setSubmenu] = useState(false);

    const handleTabChange = (eventKey) => {
        changeTab(eventKey);
    };

    const toggleSettingsDropdown = () => {
        setSubmenu(!submenu);
    };
    

  return (
    <>  <div>
            <nav className="navbar">            
                <div className="navbar-container">
                    <div className="navbar-logo-div" onClick={() => handleTabChange('Home')}>
                        <a className="navbar-logo-link" href="#"></a>
                        <SiOpenai/>
                    </div>

                    <ul className="menu-list mt-5">   
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('playgrounds')} href="#">
                                <TbBrandPowershell className="sidebar-icons"/>
                                <span className="menu-link-text">Playground</span>    
                            </a>
                        </li>
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('assistants')} href="#">
                                <LiaRobotSolid className="sidebar-icons"/>
                                <span className="menu-link-text">Assistants</span>    
                            </a>
                        </li>
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('tunning')} href="#">
                            <LuSettings2 className="sidebar-icons"/>
                                <span className="menu-link-text">Fine-tuning</span>    
                            </a>
                        </li>
                        <li className="menu-item">                            
                            <a className="menu-link" onClick={() => handleTabChange('api')} href="#">
                            <FaLock className="sidebar-icons"/>
                                <span className="menu-link-text">API keys</span>    
                            </a>
                        </li>
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('Storage')} href="#">
                                <FiDatabase className="sidebar-icons" />
                                <span className="menu-link-text">Storage</span>    
                            </a>
                        </li>
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('usage')} href="#">
                            <ImStatsBars2 className="sidebar-icons" />
                                <span className="menu-link-text">Usage</span>    
                            </a>
                        </li>
                        {/* <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('settings')} href="#">
                            <IoIosSettings className="sidebar-icons" />
                                <span className="menu-link-text">Settings</span>    
                            </a>
                        </li> */}
                        <li className="menu-item">
                            <a className="menu-link" onClick={() => toggleSettingsDropdown()} href="#">
                            <IoIosSettings className="sidebar-icons" />
                            <span className="menu-link-text">Settings</span>
                            </a>
                            {submenu && (
                            <ul className="menu-list mt-2">
                                <li className="menu-item sub-menu">                        
                                    <a className="menu-link" onClick={() => handleTabChange('Organization')} href="#">
                                        <span className="menu-link-text">Organization</span>    
                                    </a>
                                </li> 
                                <li className="menu-item sub-menu">                        
                                    <a className="menu-link" onClick={() => handleTabChange('Teams')} href="#">
                                        <span className="menu-link-text">Team</span>    
                                    </a>
                                </li> 
                                <li className="menu-item sub-menu">                        
                                    <a className="menu-link" onClick={() => handleTabChange('settings')} href="#">
                                        <span className="menu-link-text">Limits</span>    
                                    </a>
                                </li> 
                                <li className="menu-item sub-menu">                        
                                    <a className="menu-link" onClick={() => handleTabChange('settings')} href="#">
                                        <span className="menu-link-text">Billing</span>    
                                    </a>
                                </li> 
                                <li className="menu-item sub-menu">                        
                                    <a className="menu-link" onClick={() => handleTabChange('settings')} href="#">
                                        <span className="menu-link-text">Profile</span>    
                                    </a>
                                </li> 
                                {/* Add more submenu items as needed */}
                            </ul>
                            )}
                        </li>
                    </ul>

                    <ul className="menu-list navbar-footer">   
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('Documentation')} href="#">
                                <LuBook  className="sidebar-icons"/>
                                <span className="menu-link-text">Documentation</span>    
                            </a>
                        </li>
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('Help')} href="#">
                                <IoIosHelpBuoy className="sidebar-icons"/>
                                <span className="menu-link-text">Help</span>    
                            </a>
                        </li>
                        <li className="menu-item">                        
                            <a className="menu-link" onClick={() => handleTabChange('All products')} href="#">
                                <CgMenuGridR  className="sidebar-icons"/>
                                <span className="menu-link-text">All products</span>    
                            </a>
                        </li>
                    </ul>
                    <div className='navbar-footter-border'>
                        <ul className="menu-list mt-3">
                            <li className="menu-item">                        
                                <a className="menu-link" onClick={() => handleTabChange('Personal')} href="#">
                                    <FaRegUserCircle  className="sidebar-icons"/>
                                    <span className="menu-link-text">Personal</span>    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  );
};

export default Sidebar;