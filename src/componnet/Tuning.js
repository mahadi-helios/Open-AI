import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { LuBook } from "react-icons/lu";
import { Modal, Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

const FineTuning = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('all'); 

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleButtonClick = (option) => {
    setSelected(option);
  };

  return (
    <div>
      <div className='assistans-nav-border'>
        <div>
          <h1 className='assistant-nav-header'>Fine-tuning</h1>
          <div className='d-flex justify-content-between align-items-center ms-4 mb-3'>
            <div>
              {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
                <label className="btn btn-outline-success" htmlFor="btnradio1">All</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                <label className="btn btn-outline-success" htmlFor="btnradio2">Successful</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                <label className="btn btn-outline-success" htmlFor="btnradio3">Failed</label>
              </div> */}
                <ButtonGroup aria-label="Basic example">
                  <Button variant="outline-success" onClick={() => handleButtonClick('all')} active={selected === 'all'}>All</Button>
                  <Button variant="outline-success" onClick={() => handleButtonClick('successful')} active={selected === 'successful'}>Successful</Button>
                  <Button variant="outline-success" onClick={() => handleButtonClick('failed')} active={selected === 'failed'}>Failed</Button>
                </ButtonGroup>
            </div>
            <div className='d-flex justify-content-around align-items-center gap-3'>
              <button className="assistant-learn-btn" type="button"> <LuBook /> Learn more</button>
              <button className="assistant-create-btn" type="button" onClick={handleShow}> <FaPlus /> Create</button>
            </div>
          </div>
        </div>
      </div>
      <div className='assistant-nav-content'>
        <div>
          <div className='text-center my-2'>
            <p className='assistant-text'>No fine-tuning jobs found. <br /> You can create a fine-tuning job below or using the OpenAI API.
            </p>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
            <button className="assistant-learn-btn" type="button">Learn more</button>
            <button className="assistant-create-btn " type="button" onClick={handleShow}> <FaPlus /> Create</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your modal content goes here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla urna ut aliquet accumsan. Integer nec nibh a ante interdum tincidunt. Mauris quis sapien sem. Sed sed metus ut enim scelerisque efficitur.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FineTuning;
