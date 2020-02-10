import React from 'react';

export const AssetManagement = () => {
    return (
        <div className="asset container mt-5">
            <div className="button-asset">
                <button className="btn btn-dark">Record Asset</button>
                <button className="btn btn-dark">Disposal of Asset</button>
                <button className="btn btn-dark">Depredation</button>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <div className="button2-asset">
                        <button className="btn btn-dark">Export</button>
                        <button className="btn btn-dark">Print</button>
                        <button className="btn btn-dark">Save</button>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                    <h4>Fixed Asset List</h4>
                    <hr/>
                    <div className="button3-asset d-flex">
                        <button className="btn btn-danger">Delete Asset</button>
                        <button className="btn btn-primary">Dispose Asset</button>
                    </div>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Select</th>
                                <th>Asset Code</th>
                                <th>Asset Name</th>
                                <th>Qty</th>
                                <th>Buy Date</th>
                                <th>Buy Use</th>
                                <th>Buy Price</th>
                                <th>Status</th>
                                <th>Action</th>
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
                                <td></td>
                                <td></td>
                                <td>
                                    <button className="btn btn-warning">Edit Asset</button>
                                </td>
                            </tr>       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}