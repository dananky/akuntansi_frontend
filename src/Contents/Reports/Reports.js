import React from 'react';

export const Reports = (props) => {

    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" >Bussiness Overview</button>
                    <button className="btn btn-md btn-secondary mr-2" >Sales</button>
                    <button className="btn btn-md btn-secondary mr-2" >Purchase</button>
                    <button className="btn btn-md btn-secondary mr-2" >Expense</button>
                    <button className="btn btn-md btn-secondary mr-2" >Cash/Bank</button>
                    <button className="btn btn-md btn-secondary mr-2" >General Ledger</button>
                    <button className="btn btn-md btn-secondary mr-2" >Receiveable</button>
                    <button className="btn btn-md btn-secondary mr-2" >Liability</button>
                    <button className="btn btn-md btn-secondary mr-2" >Fixed Asset</button>
                    <button className="btn btn-md btn-secondary mr-2" >Tax</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                </div>
            </div>
        </div>
    )
}