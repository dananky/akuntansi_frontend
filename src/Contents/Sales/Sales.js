import React from 'react';
// import './Style.css'

export const Sales = () => {
    return (
        <div className="sales container mt-5">
            <div className="button-sales">
                <button className="btn btn-dark">Invoice</button>
                <button className="btn btn-dark">Sales Order</button>
                <button className="btn btn-dark">Sales Delivery</button>
                <button className="btn btn-dark">Sales Quote</button>
                <button className="btn btn-dark">Sales Return</button>
                <button className="btn btn-dark">Price Adjusment</button>
                <button className="btn btn-dark">Discount</button>
                <button className="btn btn-dark">Comission Expense</button>
                <button className="btn btn-dark">Sales Target</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <div class="row">
                        <div className="button2-sales">
                            <button className="btn btn-dark">Export</button>
                            <button className="btn btn-dark">Print</button>
                            <button className="btn btn-dark">Save</button>
                            <button className="btn btn-dark">Edit</button>
                        </div>
                        <div class="col">
                            <h6>Costumer</h6>
                            <select className="custom-select">
									<option>Make a selection</option>
                            </select>
                            <h6>Address</h6>
                            <textarea name="address-costumer" id="address-costumer" cols="30" rows="6"/>
                        </div>

                        <div class="col">
                            <h6>Transaction Date</h6>
                            <select className="custom-select">
									<option>Make a selection</option>
                            </select>
                            <h6>Due Date</h6>
                            <select className="custom-select">
									<option>Pick a date</option>
                            </select>
                            <h5>Term</h5>
                            <select className="custom-select">
									<option>Net 30</option>
                            </select>
                        </div>

                        <div class="col">
                            <h6>Warehouse</h6>
                            <select className="custom-select">
									<option>Make a selection</option>
                            </select>
                            <h6>Transaction Number</h6>
                            <select className="custom-select">
									<option>Auto</option>
                            </select>
                        </div>

                        <div class="col">
                            <h6>Sales Invoice</h6>
                            <select className="custom-select">
									<option>Sales Invoice</option>
									<option>Sales Order</option>
									<option>Sales Deliver</option>
                            </select>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Unit</th>
                                <th>Unit Price</th>
                                <th>Disc.</th>
                                <th>Tax</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select className="custom-select">
                                        <option>Select tax</option>
                                    </select>
                                </td>
                                <td>
                                    <input 
                                        type="text" 
                                        placeholder="description" 
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <select className="custom-select">
                                        <option></option>
                                    </select>
                                </td>
                                <td></td>
                                <td>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Rp</span>
                                        </div>
                                        <input type="number" class="form-control" aria-describedby="basic-addon1"/>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">Rp</span>
                                        </div>
                                        <input type="number" className="form-control" aria-describedby="basic-addon1"/>
                                    </div>
                                </td>
                            </tr>       
                        </tbody>
                    </table>
                    <div className="memo">
                        <h6>Memo</h6>
                        <textarea name="" id="" cols="30" rows="5"/>
                    </div>
                    <div className="button3-sales">
                        <button className="btn btn-success">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}