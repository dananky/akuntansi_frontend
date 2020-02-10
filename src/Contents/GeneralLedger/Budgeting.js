import React from "react";

const Budgeting = props => {
  return (
    <>
      {/* Page Title & Bread Crumb */}
      <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h4 className="text-themecolor">Budgeting</h4>
        </div>
        <div className="col-md-7 align-self-center text-right">
          <div className="d-flex justify-content-end align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/generalledger">General Ledger</a>
              </li>
              <li className="breadcrumb-item active">Budgeting</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column mb-5">
            <div className="d-flex mb-4 justify-content-end">
              <button className="btn btn-sm btn-secondary mr-2">Edit</button>
              <button className="btn btn-sm btn-secondary mr-2">Save</button>
              <button className="btn btn-sm btn-secondary mr-2">Print</button>
              <button className="btn btn-sm btn-secondary">Export</button>
            </div>
            <div className="d-flex">
              <div className="pr-3 w-25">
                <label>Month</label>
                <div className="input-group">
                  <select className="form-control form-control-sm">
                    <option value="">January</option>
                  </select>
                  <select className="form-control form-control-sm">
                    <option value="">2020</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-0">
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Expense/Revenue</th>
                  <th>Code</th>
                  <th>Memo</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend input-group-prepend-sm">
                        <span className="input-group-text" id="basic-addon1">
                          Rp
                        </span>
                      </div>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        placeholder="input field"
                      ></input>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-md-4 col-sm-5">
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
            </div>
            <div className="d-flex mt-4 justify-content-end">
              <button className="btn btn-outline-success mr-2">Cancel</button>
              <button className="btn btn-success">Create</button>
            </div>
          </div>
          <div className="pl-0">
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Expense/Revenue</th>
                  <th>Code</th>
                  <th>Memo</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend input-group-prepend-sm">
                        <span className="input-group-text" id="basic-addon1">
                          Rp
                        </span>
                      </div>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        placeholder="input field"
                      ></input>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-md-4 col-sm-5">
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
            </div>
            <div className="d-flex mt-4 justify-content-end">
              <button className="btn btn-outline-success mr-2">Cancel</button>
              <button className="btn btn-success">Create</button>
            </div>
          </div>
          <div className="pl-0">
            <table className="table table-sm table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Expense/Revenue</th>
                  <th>Code</th>
                  <th>Memo</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="input field"
                    ></input>
                  </td>
                  <td>
                    <div className="input-group input-group-sm">
                      <div className="input-group-prepend input-group-prepend-sm">
                        <span className="input-group-text" id="basic-addon1">
                          Rp
                        </span>
                      </div>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        placeholder="input field"
                      ></input>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-md-4 col-sm-5">
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
            </div>
            <div className="d-flex mt-4 justify-content-end">
              <button className="btn btn-outline-success mr-2">Cancel</button>
              <button className="btn btn-success">Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budgeting;
