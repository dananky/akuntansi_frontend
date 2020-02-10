import React from 'react';

export const Purchase = () => {
    return (
        <div className="purchase container mt-5">
            <div className="button-purchase">
                <button className="btn btn-dark">Purchase Invoice</button>
                <button className="btn btn-dark">Purchase Order</button>
                <button className="btn btn-dark">Purchase Delivery</button>
                <button className="btn btn-dark">Purchase Quote</button>
                <button className="btn btn-dark">Purchase Expense</button>
                <button className="btn btn-dark">Purchase Return</button>
                <button className="btn btn-dark">Supplier Price</button>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <div className="button2-purchase">
                        <button className="btn btn-dark">Export</button>
                        <button className="btn btn-dark">Print</button>
                        <button className="btn btn-dark">Save</button>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                    <h4>Purchase List</h4>
                    <hr/>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Select</th>
                                <th>Date</th>
                                <th>Number</th>
                                <th>Category</th>
                                <th>Supplier</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input type="checkbox" aria-label="Checkbox for following text input"/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <input type="date" className="form-control" placeholder="input text"/>
                                </td>
                                <td>
                                    <input type="text" className="form-control" placeholder="input text"/>
                                </td>
                                <td>
                                    <input type="text" className="form-control" placeholder="input text"/>
                                </td>
                                <td>
                                    <input type="text" className="form-control" placeholder="input text"/>
                                </td>
                                <td>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Rp</span>
                                        </div>
                                        <input type="number" className="form-control" aria-describedby="basic-addon1"/>
                                    </div>
                                </td>
                            </tr>       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}