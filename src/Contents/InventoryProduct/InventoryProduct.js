import React from 'react';
// import './Style.css'

export const Inventory = () => {
    return (
        <div className="inventory container mt-5">
            <div className="button-inventory">
                <button className="btn btn-dark">Good and Services</button>
                <button className="btn btn-dark">Product Requisition</button>
                <button className="btn btn-dark">Material Addition</button>
                <button className="btn btn-dark">Job Order</button>
                <button className="btn btn-dark">Product Category</button>
                <button className="btn btn-dark">Product Minimum Stock</button>
                <button className="btn btn-dark">Stock Adjusment</button>
                <button className="btn btn-dark">Warehouse</button>
                <button className="btn btn-dark">Warehouse Transfer</button>
                <button className="btn btn-dark">Product Unit</button>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <div className="button2-inventory">
                        <button className="btn btn-dark">Export</button>
                        <button className="btn btn-dark">Print</button>
                        <button className="btn btn-dark">Save</button>
                        <button className="btn btn-dark">Edit</button>
                    </div>

                    <div className="card-group">
                        <div className="stock d-flex">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card available-stock">
                                        <div className="card-body">
                                            <p>Available Stock</p> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card low-stock">
                                        <div className="card-body">
                                           <p>Low Stock</p> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card out-of-stock">
                                        <div className="card-body">
                                           <p>Out of Stock</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4>Inventory List</h4>
                    <hr/>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Select</th>
                                <th>Product Name</th>
                                <th>Product Code</th>
                                <th>Qty</th>
                                <th>Minimum Stock</th>
                                <th>Units</th>
                                <th>Buy Price</th>
                                <th>Sell Price</th>
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
                            </tr>       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}