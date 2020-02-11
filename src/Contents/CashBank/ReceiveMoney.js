import React from 'react';

export const ReceiveMoney = () => {
    return (
        <>
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-5">
                        <button className="ml-auto btn btn-sm btn-secondary mr-2">
                        Edit
                        </button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                    <div className="d-flex">
                        <div className="pr-3 w-25">
                        <label>Deposit to </label>
                        <select className="form-control form-control-sm">
                            <option>select</option>
                        </select>
                    </div>

                    <div className="pr-3 w-25">
                        <label>Date</label>
                        <input type="date" className="form-control form-control-sm"/>
                    </div>

                    <div className="pr-3 w-25">
                        <label>Transfer from</label>
                        <select className="form-control form-control-sm">
                            <option>select</option>
                        </select>                
                    </div>

                    <div className="pr-3 w-25">
                        <label>Transaction Number</label>
                        <input type="text" placeholder="auto" className="form-control form-control-sm" disabled/>
                    </div>
                </div>
            </div>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Account Code</th>
                        <th>Account Name</th>
                        <th>Balance</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <select className="form-control form-control-sm mt-3">
                            <option>select account</option>
                        </select> 
                        <td>
                            <input type="text" className="form-control form-control-sm" placeholder="input text"/>
                        </td>
                        <select className="form-control form-control-sm mt-3">
                            <option>select tax</option>
                        </select> 
                        <td>
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend input-group-prepend-sm">
                                    <span className="input-group-text" id="basic-addon1">Rp</span>
                                </div>
                                <input type="number" className="form-control form-control-sm" aria-describedby="basic-addon1"/>
                            </div>
                        </td>
                    </tr>       
                </tbody>
            </table>
            <div className="pl-0">
            <div className="d-flex">
                <div className="card">
                    <div className="card-body">
                        <input
                        className="form-control form-control-sm mb-2"
                        type="text"
                        placeholder="Memo"
                        />
                        <textarea
                        className="form-control form-control-sm" style={{minHeight:"6rem"}}
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
    )
}