import React from 'react';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineSmsFailed } from "react-icons/md";


const Document = () => {

  return (
    <>
      <div>
        <div className='assistans-nav-border'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex jsutify-content-center align-items-center'>
                <b className='assistant-nav-header fs-5'>Documentation</b>
                <b className='fs-5'>API reference</b>
            </div>
            <div className='d-flex jsutify-content-center align-items-center gap-3 mt-3'>
                <p className='text-dark-emphasis'><MdOutlineSmsFailed /> Forum</p>
                <p className='text-dark-emphasis'><IoIosHelpCircleOutline /> Help</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
