import React from 'react';
// import './Style.css';

export const PayMoney = () => {
    return (
        <div className="paymoney container mt-5">
            <div className="card">
                <div className="button-paymoney">
                    <button className="btn btn-dark">Export</button>
                    <button className="btn btn-dark">Print</button>
                    <button className="btn btn-dark">Save</button>
                    <button className="btn btn-dark">Edit</button>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col">
                            <h6>Pay from</h6>
                            <select className="custom-select">
                                <option>Make a selection</option>
                            </select>
                        </div>

                        <div class="col">
                            <h6>Date</h6>
                            <input type="date" className="form-control"/>
                        </div>

                        <div class="col">
                            <h6>Transaction Number</h6>
                            <input type="text" placeholder="auto" className="form-control" disabled/>
                        </div>
                    </div>
                    <div className="col-sm-9">
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
                                    <td>
                                        <select 
                                            name="accountcode" 
                                            id="accountcode" 
                                            className="custom-select"
                                        >
                                            <option>select account code</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            name="accountname" 
                                            id="accountname"
                                            className="form-control"
                                            placeholder="input name"
                                        />
                                    </td>
                                    <td>
                                        <select 
                                            name="accountcode" 
                                            id="accountcode" 
                                            className="custom-select"
                                        >
                                            <option>select tax</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input 
                                            type="text" 
                                            placeholder="Rp.0" 
                                            className="form-control"
                                        />
                                    </td>
                                </tr>       
                            </tbody>
                        </table>
                    </div>
                    <div className="memo">
                        <h6>Memo</h6>
                        <textarea name="memo-paymoney" id="memo-paymoney" rows="5"/>
                    </div>
                    <div className="button2-transferbank">
                        <button className="btn btn-success">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}