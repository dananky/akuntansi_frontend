import React from "react";

const ClosingBook = props => {
  return (
    <>
      <div className="content">
        <h4 className="mb-4">Closing Book</h4>
        <div className="d-flex flex-column mb-5">
          <div className="d-flex mb-4 ">
            <button className="ml-auto btn btn-sm btn-secondary mr-2">
              Edit
            </button>
            <button className="btn btn-sm btn-secondary mr-2">Save</button>
            <button className="btn btn-sm btn-secondary mr-2">Print</button>
            <button className="btn btn-sm btn-secondary">Export</button>
          </div>
          <div className="d-flex">
            <div className="pr-3 w-25">
              <label>Pay From</label>
              <select className="form-control form-control-sm">
                <option>select account</option>
              </select>
            </div>
            <div className="pr-3 w-25">
              <label>Transaction Date</label>
              <input
                className="form-control form-control-sm"
                type="date"
                placeholder="transaction number"
              ></input>
              <label className="mt-4">Due Date</label>
              <input
                className="form-control form-control-sm"
                type="date"
                placeholder="transaction number"
              ></input>
            </div>
          </div>
        </div>
        <div className="pl-0">
          <table className="table table-sm table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Period</th>
                <th>Memo</th>
                <th>Net Profit/Loss</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Period
                </td>
                <td>
                  Memo
                </td>
                <td>
                  Rp 0,00
                </td>
                <td>
                  <select className="form-control form-control-sm">
                    <option>Change Period</option>
                    <option>Prepare Worksheet</option>
                    <option>Delete Draft</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex mt-4 pb-5">
            <button className="btn btn-secondary ml-auto">Add More Data</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClosingBook;
