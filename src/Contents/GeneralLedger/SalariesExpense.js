import React from "react";

const SalariesExpense = props => {
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
                <th>Gross Revenue</th>
                <th>Salary Name</th>
                <th>Tax Salary</th>
                <th>Paid Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="input text"
                  ></input>
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="input text"
                  ></input>
                </td>
                <td>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="input text"
                  ></input>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group-prepend input-group-prepend-sm">
                      <span class="input-group-text" id="basic-addon1">
                        Rp
                      </span>
                    </div>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      placeholder="input text"
                    ></input>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex">
            <div className="card">
              <div className="card-body">
                <input
                  className="form-control form-control-sm mb-2"
                  type="text"
                  placeholder="Memo"
                />
                <textarea
                  className="form-control form-control-sm"
                  style={{ minHeight: "6rem" }}
                  type="text"
                  placeholder=""
                ></textarea>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 pb-5">
            <button className="btn btn-secondary ml-auto mr-2">Cancel</button>
            <button className="btn btn-secondary">Create</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SalariesExpense;
