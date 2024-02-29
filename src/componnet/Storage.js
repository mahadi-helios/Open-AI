import React, { useState } from 'react';
import { LuBook } from "react-icons/lu";
import { MdUploadFile } from "react-icons/md";
import { Modal, Button } from 'react-bootstrap';

const Storage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div>
        <div className='assistans-nav-border'>
          <div>
            <h1 className='assistant-nav-header'>Storage</h1>
            <div className='d-flex justify-content-between align-items-center ms-4 mb-3'>
              <div className='d-flex justify-content-start align-items-start gap-3'>
                <div>
                  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="group1" id="btnradi1" autoComplete="off" checked />
                    <label className="btn btn-outline-success" htmlFor="btnradi1">Date</label>

                    <input type="radio" className="btn-check" name="group1" id="btnradi2" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradi2">Name</label>
                  </div>
                </div>
                <div>
                  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="group2" id="btnradi3" autoComplete="off" checked />
                    <label className="btn btn-outline-success" htmlFor="btnradi3">Desc</label>

                    <input type="radio" className="btn-check" name="group2" id="btnradi4" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradi4">Asc</label>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center gap-3'>
                <button className="assistant-learn-btn" type="button"> <LuBook /> Learn more</button>
                <button className="assistant-create-btn" type="button" onClick={handleShow}> <MdUploadFile /> Upload</button>
              </div>
            </div>
          </div>
        </div>
        <div className='assistant-nav-content'>
          <div>
            <div className='text-center my-2'>
              <p className='text-secondary '>No files found. <br /> Create a file with the OpenAI API.
              </p>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
              <button className="assistant-learn-btn" type="button">Learn more</button>
            </div>
          </div>
        </div>
      </div>  

      {/* Modal for Upload */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><b>Upload a File</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"/>
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='assistant-learn-btn' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Storage;
