import React from 'react';

const Organization = () => {
  return (
    <>
      <div>
        <div className='assistans-nav-border'>
          <div>
            <h1 className='assistant-nav-header'>Organization</h1>
          </div>
        </div>
        <div className='assistans-nav-conatiner p-3'>
          <form>
            <h6 className='fw-bold'>Details</h6>
            <div className='row mb-4'>
              <div className='col-lg-7 col-sm-12 col-md-12'>
                <h6 className='fw-bold mt-4 mb-0'>Organization name</h6>
                <div className='fs-6 text-dark-emphasis mb-2'>Human-friendly label for your organization, shown in user interfaces</div>
                <div class="input-group forms-input-width mb-3">
                  <input type="text" class="form-control" aria-label="Organization name" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className='col-lg-7 col-sm-12 col-md-12'>
                <h6 className='fw-bold mt-2 mb-0'>Organization ID</h6>
                <div className='fs-6 text-dark-emphasis mb-2'>Identifier for this organization sometimes used in API requests</div>
                <div class="input-group forms-input-width mb-3">
                  <input type="text" class="form-control" aria-label="Organization ID" aria-describedby="basic-addon2"/>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <h6 className='fw-bold '>Features and capabilities</h6>
            </div>
            <div className='mt-3 mb-4'>
              <h6 className='fw-bold'>Threads</h6>
              <div className='fs-6 text-dark-emphasis mb-2'>Threads page shows messages created with the Assistants API and Playground.</div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="threadsVisibility" id="threadsHidden"/>
                <label class="form-check-label" for="threadsHidden">
                  <b>Hidden</b>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="threadsVisibility" id="threadsOrgOwners" checked/>
                <label class="form-check-label" for="threadsOrgOwners">
                  <b>Visible to organization owners</b>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="threadsVisibility" id="threadsEveryone" checked/>
                <label class="form-check-label" for="threadsEveryone">
                  <b>Visible to everyone</b>
                </label>
              </div>
            </div>
            <div className='mt-4 mb-4'>
              <h6 className='fw-bold'>Usage dashboard visibility</h6>
              <div className='fs-6 text-dark-emphasis mb-2'>Usage dashboard shows activity and costs for your organization.</div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="usageVisibility" id="usageOrgOwners"/>
                <label class="form-check-label" for="usageOrgOwners">
                  <b>Visible to organization owners</b>
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="usageVisibility" id="usageEveryone" checked/>
                <label class="form-check-label" for="usageEveryone">
                  <b>Visible to everyone</b>
                </label>
              </div>
            </div>
            <div className='mt-3'>
              <button class="assistant-create-btn" type='button'>Save</button>
            </div>
          </form>
        </div>
      </div>  
    </>
  );
};

export default Organization;
