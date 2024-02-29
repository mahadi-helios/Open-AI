import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { LiaRobotSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";
import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

const Assistants = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <>
          <div>
              <div className='assistans-nav-border'>
                  <div className='d-flex justify-content-between align-items-center'>
                      <h1 className='assistant-nav-header'>Assistants</h1> 
                      <div>
                        <button className="assistant-create-btn" type="button" onClick={handleShowOffcanvas}> <FaPlus /> Create</button>
                        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas right</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>
                            Offcanvas content goes here...
                          </Offcanvas.Body>
                        </Offcanvas>
                      </div>
                  </div>
              </div>
              <div className='assistant-nav-content'>
                  <div>
                      <div className='d-flex justify-content-center align-items-center'><LiaRobotSolid className='assistant-icon'/></div>
                        <h4 className='d-flex justify-content-center align-items-center assistant-text'>Create an assistant</h4>
                      <div className='d-flex justify-content-center align-items-center gap-1 my-2'>
                        <p className='assistant-text'>to get started with the </p>
                        <a className='text-decoration-none text-success  assistant-text' href="#">Assistants API <MdArrowOutward /></a>
                      </div>
                      <div className='d-flex justify-content-center align-items-center'>
                        <button className="assistant-create-btn " type="button" onClick={handleShowOffcanvas}> <FaPlus /> Create</button>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
};

export default Assistants;
