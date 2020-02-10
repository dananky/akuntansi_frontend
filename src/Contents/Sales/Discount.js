import React from 'react';
// import './Style.css'

export const Discount = () => {
    return (
        <div className="discount container mt-5">
            <div className="card">
                <div className="button-discount">
                    <button className="btn btn-dark">Export</button>
                    <button className="btn btn-dark">Print</button>
                    <button className="btn btn-dark">Save</button>
                    <button className="btn btn-dark">Edit</button>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col-md-4">
                            <h6>Warehouse</h6>
                            <select className="custom-select">
                                <option>select a warehouse</option>
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
                </div>
            </div>
        </div>
    )
}