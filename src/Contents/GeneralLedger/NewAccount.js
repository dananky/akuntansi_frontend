import React from "react";

const NewAccount = props => {
  return (
    <>
      <div className="content">
        <h4 className="mb-4">New Account</h4>
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
            <div className="d-flex flex-column w-50">
              <div className="mt-3">
                <label>Account Type</label>
                <select className="form-control form-control-sm">
                  <option>select contact</option>
                </select>
              </div>
              <div className="mt-3">
                <label>Code</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="auto"
                ></input>
              </div>
              <div className="mt-3">
                <label>Account Name</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="auto"
                ></input>
              </div>
              <div className="mt-3">
                <label>Currency</label>
                <select className="form-control form-control-sm">
                  <option>select contact</option>
                </select>
              </div>
              <div className="mt-3">
                <label>Start Balance</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="auto"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-0">
          <div className="d-flex mt-4 pb-5">
            <button className="btn btn-secondary ml-auto mr-2">Cancel</button>
            <button className="btn btn-secondary">Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAccount;
