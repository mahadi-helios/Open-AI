import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

const Playground = () => {
  return (
    <>
        <div className='assistans-nav-border'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
              <h1 className='assistant-nav-header'>Playground</h1>
              <div>
                <select class="playground-select-dropdown" aria-label="Default select example">
                  <option selected>Chat</option>
                  <option value="2">Assistant</option>
                  <option value="3">Complete</option>
                </select>
              </div>
            </div>
            <div className='d-flex justify-content-evenly align-items-center gap-3'>
                <input type="text" />
                <button className="assistant-learn-btn" type="button"><b>Save</b></button>
                <button className="assistant-learn-btn" type="button"><b>View code</b></button>
                <button className="assistant-learn-btn" type="button"><b>Share</b></button>
                <button className="assistant-learn-btn" type="button"><b>...</b></button>
            </div>
          </div>
        </div>
        <div className="row assistans-nav-conatiner p-3">
          <div className="col-lg-3">
            <div className="form-floating">
              <textarea className="form-control" placeholder="Your helpfull assistance." id="floatingTextarea" style={{height:"500px"}}></textarea>
              <label htmlFor="floatingTextarea">SYSTEM</label>
            </div>
          </div>
          <div className="col-lg-6">.col-6 .col-md-4</div>
          <div className="col-lg-3">
            <div className='row'>
                <div>
                    <p>Model</p>
                    <div class="form-floating">
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Playground;