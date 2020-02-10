import React from "react";

const ProductRequisition = props => {
  return (
    <>
      <div className="content">
        <h4 className="mb-4">Product Requisition</h4>
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
              <label>Transaction Date</label>
              <input className="form-control form-control-sm" type="date" />
            </div>
            <div className="pr-3 w-25">
              <label>Transaction Number</label>
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="auto"
              />
            </div>
          </div>
        </div>
        <div className="pl-0">
          <table className="table table-sm table-bordered shadow">
            <thead className="thead-dark">
              <tr>
                <th>Code</th>
                <th>Account</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Description</th>
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
    </>
  );
};

export default ProductRequisition;
