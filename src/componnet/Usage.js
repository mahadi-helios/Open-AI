import React from 'react';

const Usage = () => {
  return (
    <>
      <div>
        <div className='assistans-nav-border'>
          <div>
            <h1 className='assistant-nav-header'>Usage</h1>
            <div className='d-flex justify-content-between align-items-center ms-4 mb-3'>
              <div className='d-flex justify-content-start align-items-start gap-3'>
                <div>
                  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="group1" id="btnradi1" autoComplete="off" checked />
                    <label className="btn btn-outline-success" htmlFor="btnradi1">Cost</label>

                    <input type="radio" className="btn-check" name="group1" id="btnradi2" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradi2">Activity</label>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-around align-items-center gap-3'>
                <button className="assistant-learn-btn" type="button">  Learn more</button>
                <button className="assistant-create-btn" type="button"> Export</button>
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
    </>
  );
};

export default Usage;