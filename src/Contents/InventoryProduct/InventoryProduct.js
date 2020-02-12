import React from 'react';

export const InventoryProduct = (props) => {

    const handleGoodServices = () => {
        props.history.push('/goodsservice')
    }
    const handleProductRequisition = () => {
        props.history.push('/productrequisition')
    }
    const handleJobOrder = () => {
        props.history.push('/joborder')
    }
    const handleMaterialAddition = () => {
        props.history.push('/materialaddition')
    }
    const handleProdutCategory = () => {
        props.history.push('/productcategory')
    }
    const handleProductMinimum = () => {
        props.history.push('/productminimum')
    }
    const handleProductUnit = () => {
        props.history.push('/productunit')
    }
    const handleStockAdjustment = () => {
        props.history.push('/stockadjustment')
    }
    const handleWarehouse = () => {
        props.history.push('/warehouse')
    }
    const handleWarehouseTransfer = () => {
        props.history.push('/warehousetransfer')
    }

    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleGoodServices}>Goods and Services</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleProductRequisition}>Product Requisition</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleMaterialAddition}>Material Addition</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleJobOrder}>Job Order</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleProdutCategory}>Product Category</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleProductMinimum}>Product Minimum Stock</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleStockAdjustment}>Stock Adjustment</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleWarehouse}>Warehouse</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleWarehouseTransfer}>Warehouse Transfer</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleProductUnit}>Product Unit</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                </div>

                <h4>Inventory List</h4>
                <hr/>
                <div className="d-flex mt-4 pb-4">
                    <button className="btn btn-secondary">delete</button>
                </div>
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
                                <input type="text" className="form-control" placeholder="input text"/>
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
    )
}