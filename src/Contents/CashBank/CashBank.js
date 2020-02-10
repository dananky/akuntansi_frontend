import React from 'react';
// import './Style.css'

export const CashBank = () => {
    return (
        <div className="cashbank container mt-5">
            <div className="button1">
                <button className="btn btn-dark">Receive Money</button>
                <button className="btn btn-dark">Transfer Fund</button>
                <button className="btn btn-dark">Reconcile Bank</button>
                <button className="btn btn-dark">Pay Money</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="button2">
                        <button className="btn btn-dark">Export</button>
                        <button className="btn btn-dark">Print</button>
                        <button className="btn btn-dark">Save</button>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                    <h3>List of Account</h3>
                    <hr/>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Account Code</th>
                                <th>Account Name</th>
                                <th>Balance</th>
                                <th>Memo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>Cash</td>
                                <td>Rp.200.000</td>
                                <td>Trial</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}