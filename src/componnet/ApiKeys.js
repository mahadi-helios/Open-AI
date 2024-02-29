import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { Modal, Button } from 'react-bootstrap';

const ApiKey = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPersonalModal, setShowPersonalModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleClosePersonalModal = () => setShowPersonalModal(false);
  const handleShowPersonalModal = () => setShowPersonalModal(true);

  return (
    <>
      <div>
        <div className='assistans-nav-border'>
          <div>
            <h1 className='assistant-nav-header'>API keys</h1>
          </div>
        </div>
        <div className='assistans-nav-conatiner p-3'>
            <div>
              <p> Your secret API keys are listed below. Please note that we do not display your secret API keys again after you generate them.</p>
              <p>Do not share your API key with others, or expose it in the browser or other client-side code. In order to protect the security of your account, OpenAI may also automatically disable any API key that we've found has leaked publicly.</p>
              <p>Enable tracking to see usage per API key on the <a className='text-decoration-none text-success' href="">Usage page</a>.</p>
            </div>
            <div className="card p-2 card-width">
              <div className="card-body">
                <b>You currently do not have any API keys</b>
                <p className="card-text mt-2">Create one using the button below to get started</p>
              </div>
            </div>
            <div className='mt-4'>
              <button className="assistant-learn-btn" type="button" onClick={handleShow}> <FaPlus  /> Create new secret key</button>
            </div>
            <div className='mt-5'>
              <h5 className='fw-bold'>Default organization</h5>
            </div>
            <div>
              <p>If you belong to multiple organizations, this setting controls which organization is used by default when making requests with the API keys above.</p>

              <div>
              <select class="card p-2 w-25 select-box-width" aria-label="Default select example" onClick={handleShowPersonalModal}>
                <option value="Personal" selected>Personal</option>
              </select>
              </div>
            </div>
            <div>
              <p className='text-small text-secondary mt-5'>Note: You can also specify which organization to use for each API request. See <a className='text-decoration-none text-success' href="">Authentication</a> to learn more.</p>
            </div>

          </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Secret Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Modal content goes here */}
          This is where you put the content for creating a new secret key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Personal modal */}

      <Modal show={showPersonalModal} onHide={handleClosePersonalModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change default organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Change your default organization to <b>Personal?</b></span>
          <p className='mt-2'>
           <b>Warning:</b>Existing API integrations that use your secret key and do not explicitly specify an <b>OpenAI-Organization</b> header will be affected. Any such API usage will count as usage for the <b>Personal</b> organization.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="assistant-learn-btn" onClick={handleClosePersonalModal}>
            Cancel
          </Button>
          <Button className="assistant-create-btn" onClick={handleClosePersonalModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApiKey;
