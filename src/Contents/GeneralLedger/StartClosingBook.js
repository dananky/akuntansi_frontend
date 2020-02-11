import React from "react";

const StartClosingBook = props => {
  return (
    <>
    <div className="card mt-4">
      <div className="card-body">
        <div className="d-flex flex-column mb-5">
          <div className="d-flex mb-4 ">
            <button className="ml-auto btn btn-sm btn-secondary mr-2">
              Edit
            </button>
            <button className="btn btn-sm btn-secondary mr-2">Save</button>
            <button className="btn btn-sm btn-secondary mr-2">Print</button>
            <button className="btn btn-sm btn-secondary">Export</button>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex">
              <div className="mt-3 mx-1">
                <label>From Date</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                ></input>
              </div>
              <div className="mt-3 mx-1">
                <label>To Date</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-0">
          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary mr-2">Cancel</button>
            <button className="btn btn-secondary">Start</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default StartClosingBook;
