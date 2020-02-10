import React from 'react';

export const Sales = (props) => {

    const handleOrder = () => {
        props.history.push('/salesorder')
    }
    const handleDelivery = () => {
        props.history.push('/salesdelivery')
    }
    const handleQuote = () => {
        props.history.push('/salesquote')
    }
    const handleReturn = () => {
        props.history.push('/salesreturn')
    }
    const handleComissionSales = () => {
        props.history.push('/comissionsales')
    }
    const handleDiscount = () => {
        props.history.push('/discount')
    }
    const handlePriceAdjusment = () => {
        props.history.push('/priceadjusment')
    }

    return (
        <>
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" >Sales Invoice</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleOrder}>Sales Order</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleDelivery}>Sales Delivery</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleQuote}>Sales Quote</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleReturn}>Sales Return</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePriceAdjusment} >Price Adjusment</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleDiscount}>Discount</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleComissionSales} >Comission Sales</button>
                    <button className="btn btn-md btn-secondary mr-2">Sales Target</button>
                </div>
                <div className="d-flex flex-column mb-5">
                <div className="d-flex mb-5">
                    <button className="ml-auto btn btn-sm btn-secondary mr-2">
                    Edit
                    </button>
                    <button className="btn btn-sm btn-secondary mr-2">Save</button>
                    <button className="btn btn-sm btn-secondary mr-2">Print</button>
                    <button className="btn btn-sm btn-secondary">Export</button>
                </div>
                <div className="d-flex">
                    <div className="pr-3 w-25">
                    <label>Costumer</label>
                    <select className="form-control form-control-sm">
                        <option>select costumer</option>
                    </select>
                    <label className="mt-4">Address</label>
                    <textarea
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="address"
                    ></textarea>
                    </div>

                    <div className="pr-3 w-25">
                        <label>Transaction Date</label>
                        <input type="date" className="form-control form-control-sm"/>
                        <label className="mt-4">Due Date</label>
                        <input type="date" className="form-control form-control-sm"/>
                        <label className="mt-4">Term</label>
                        <select className="form-control form-control-sm">
                            <option>Net 30</option>
                        </select>
                    </div>

                    <div className="pr-3 w-25">
                        <label>Warehouse</label>
                        <select className="form-control form-control-sm">
                            <option>select warehouse</option>
                        </select>
                        <label className="mt-4">Transaction Number</label>
                        <input type="text" placeholder="auto" className="form-control form-control-sm" disabled/>
                    </div>

                    <div className="pr-3 w-25">
                        <label>Sales Invoice</label>
                        <select className="form-control form-control-sm">
                            <option>Sales Invoice</option>
                            <option>Sales Return</option>
                            <option>Sales Order</option>
                            <option>Sales Delivery</option>
                            <option>Sales Quote</option>
                            <option>Discount</option>
                            <option>Comission Sales</option>
                            <option>Price Adjusment</option>
                        </select>
                    </div>

                </div>
                </div>
                <div className="pl-0">
                <table className="table table-sm table-bordered">
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
                            <select className="form-control form-control-sm">
                                <option>Select tax</option>
                            </select>
                        </td>
                        <td>
                            <input 
                                type="text" 
                                placeholder="description" 
                                className="form-control form-control-sm"
                            />
                        </td>
                        <td>
                            <select className="form-control form-control-sm">
                                <option></option>
                            </select>
                        </td>
                        <td></td>
                        <td>
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend input-group-prepend-sm">
                                    <span className="input-group-text" id="basic-addon1">Rp</span>
                                </div>
                                <input type="number" className="form-control form-control-sm" aria-describedby="basic-addon1"/>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend input-group-prepend-sm">
                                    <span className="input-group-text" id="basic-addon1">Rp</span>
                                </div>
                                <input type="number" className="form-control form-control-sm" aria-describedby="basic-addon1"/>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="d-flex">
                    <div className="card">
                    <div className="card-body">
                        <input
                        className="form-control form-control-sm mb-2"
                        type="text"
                        placeholder="Memo"
                        />
                        <textarea
                        className="form-control form-control-sm" style={{minHeight:"6rem"}}
                        type="text"
                        placeholder=""
                        ></textarea>
                    </div>
                    </div>
                    <div className="card ml-auto">
                    <div className="card-body">
                        <table className="table m-0 table-borderless">
                        <tbody>
                            <tr>
                            <td>Sub Total</td>
                            <td>:</td>
                            <td>Rp 1.000.000,00</td>
                            </tr>
                            <tr>
                            <td>Total</td>
                            <td>:</td>
                            <td>Rp 1.000.000,00</td>
                            </tr>
                            <tr>
                            <td>Balance Total</td>
                            <td>:</td>
                            <td>Rp 1.000.000,00</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div className="d-flex mt-4 pb-5">
                    <button className="btn btn-secondary ml-auto mr-2">Cancel</button>
                    <button className="btn btn-secondary">Create</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}