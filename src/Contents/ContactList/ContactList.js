import React from 'react';

export const ContactList = () => {
    return (
        <div className="contactlist container mt-5">
            <div className="button-contactlist d-flex">
                <button className="btn btn-dark">Costumer</button>
                <button className="btn btn-dark">Supplier</button>
                <button className="btn btn-dark">Employee</button>
                <button className="btn btn-dark">Other</button>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <div className="button2-contactlist">
                        <button className="btn btn-dark">Export</button>
                        <button className="btn btn-dark">Print</button>
                        <button className="btn btn-dark">Save</button>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                    <h4>Contact List</h4>
                    <hr/>
                    <div className="button3-contactlist">
                        <button className="btn btn-danger">Delete Contact</button>
                    </div>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Select</th>
                                <th>Name</th>
                                <th>Company Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Mobile Phone</th>
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
                                <td></td>
                            </tr>       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}