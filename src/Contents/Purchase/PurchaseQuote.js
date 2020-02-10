import React from 'react';
// import './Style.css'

export const PurchaseQuote = () => {
    return (
        <div className="purchasequote container mt-5">
            <div className="card">
                <div className="button-purchasequote">
                    <button className="btn btn-dark">Export</button>
                    <button className="btn btn-dark">Print</button>
                    <button className="btn btn-dark">Save</button>
                    <button className="btn btn-dark">Edit</button>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col">
                            <h6>Costumer</h6>
                            <select className="custom-select">
                                <option>Make a selection</option>
                            </select>
                            <h6>Address</h6>
                            <textarea name="address-costumer" id="address-costumer" cols="30" rows="6"></textarea>
                        </div>

                        <div class="col">
                            <h6>Transaction Date</h6>
                            <input type="date" className="form-control"/>
                            <h6>Due Date</h6>
                            <input type="date" className="form-control"/>
                            <h5>Term</h5>
                            <select className="custom-select">
                                <option>Net 30</option>
                            </select>
                        </div>

                        <div class="col">
                            <h6>Warehouse</h6>
                            <select className="custom-select">
                                <option>select warehouse</option>
                            </select>
                            <h6>Transaction Number</h6>
                            <input type="text" placeholder="auto" className="form-control" disabled/>
                        </div>

                        <div class="col">
                            <h6>Purchase Qoute</h6>
                            <select className="custom-select">
                                <option>Purchase Quote</option>
                                <option>Purchase Invoice</option>
                                <option>Purchase Order</option>
                                <option>Purchase Delivery</option>
                                <option>Purchase Return</option>
                                <option>Supplier Price</option>
                            </select>
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
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Rp</span>
                                            </div>
                                            <input type="number" className="form-control" aria-describedby="basic-addon1"/>
                                        </div>
                                    </td>
                                    <td></td>
                                    <td></td>
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
                    <div className="card card-purchasequote">
                        <div className="card-body">
                            <table className="table table-borderless m-0">
                                <tr>
                                    <th>Sub total</th>
                                    <td>:</td>
                                    <td>Rp.0</td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>:</td>
                                    <td>Rp.0</td>
                                </tr>
                                <tr>
                                    <th>Balance Due</th>
                                    <td>:</td>
                                    <td>Rp.0</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="memo-purchasequote">
                        <h6>Memo</h6>
                        <textarea name="memo-purchasequote" id="memo-purchasequote" rows="5"/>
                    </div>
                    <div className="button2-purchasequote">
                        <button className="btn btn-success">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}