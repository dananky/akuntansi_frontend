import React from 'react';

export const Expense = () => {
    return (
        <>
            <div className="button1">
                <button className="btn btn-dark">Create Expense</button>
                <button className="btn btn-dark">Expense Category</button>
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
                                <th>Select</th>
                                <th>Date</th>
                                <th>Number</th>
                                <th>Category</th>
                                <th>Beneficiary</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}