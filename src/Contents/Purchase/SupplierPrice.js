import React from 'react';
// import './Style.css'

export const SupplierPrice = () => {
    return (
        <div className="supplierprice container mt-5">
            <div className="card">
                <div className="button-supplierprice">
                    <button className="btn btn-dark">Export</button>
                    <button className="btn btn-dark">Print</button>
                    <button className="btn btn-dark">Save</button>
                    <button className="btn btn-dark">Edit</button>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col">
                            <h6>Supplier</h6>
                            <select className="custom-select">
                                <option>Make a selection</option>
                            </select>
                        </div>

                        <div class="col">
                            <h6>Start Date</h6>
                            <input type="date" className="form-control"/>
                        </div>

                        <div class="col">
                        
                        </div>

                        <div class="col">
                            <h6>Supplier Price</h6>
                            <select className="custom-select">
                                <option>Supplier Price</option>
                                <option>Purchase Return</option>
                                <option>Purchase Invoice</option>
                                <option>Purchase Order</option>
                                <option>Purchase Delivery</option>
                                <option>Purchase Quote</option>
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
                                            <input type="number" class="form-control" aria-describedby="basic-addon1"/>
                                        </div>
                                    </td>
                                </tr>       
                            </tbody>
                        </table>
                    </div>
                    <div className="memo-supplierprice">
                        <h6>Memo</h6>
                        <textarea name="memo-supplierprice" id="memo-supplierprice" rows="5"/>
                    </div>
                    <div className="button2-supplierprice">
                        <button className="btn btn-success">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}