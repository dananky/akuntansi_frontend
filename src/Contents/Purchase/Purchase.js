import React from 'react';

export const Purchase = (props) => {

    const handlePurchaseOrder = () => {
        props.history.push('/purchase')
    }
    const handlePurchaseInvoice = () => {
        props.history.push('/purchaseinvoice')
    }
    const handlePurchaseDelivery = () => {
        props.history.push('/purchasedelivery')
    }
    const handlePurchaseQoute = () => {
        props.history.push('/purchaseqoute')
    }
    const handlePurchaseReturn = () => {
        props.history.push('/purchasereturn')
    }
    const handlePurchasePrepaid = () => {
        props.history.push('/prepaidpurchase')
    }
    const handlePurchaseSupplier = () => {
        props.history.push('/supplierprice')
    }

    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchaseInvoice}>Purchase Invoice</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchaseOrder}>Purchase Order</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchaseDelivery}>Purchase Delivery</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchaseQoute}>Purchase Quote</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchaseReturn}>Purchase Return</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchaseSupplier} >Supplier Price</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePurchasePrepaid}>Prepaid Purchase</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
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
    )
}