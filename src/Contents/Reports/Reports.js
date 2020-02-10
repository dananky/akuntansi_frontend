import React from 'react';

export const Reports = () => {
    return (
        <div className="report container mt-5">
            <div className="button-report d-flex">
                <button className="btn btn-dark">Business Overview</button>
                <button className="btn btn-dark">Sales</button>
                <button className="btn btn-dark">Purchase</button>
                <button className="btn btn-dark">Expense</button>
                <button className="btn btn-dark">Cash/Bank</button>
                <button className="btn btn-dark">General Ledger</button>
                <button className="btn btn-dark">Receivable</button>
                <button className="btn btn-dark">Liability</button>
                <button className="btn btn-dark">Fixed Asset</button>
                <button className="btn btn-dark">Tax</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <div class="row">
                        <div className="button2-report">
                            <button className="btn btn-dark">Export</button>
                            <button className="btn btn-dark">Print</button>
                            <button className="btn btn-dark">Save</button>
                            <button className="btn btn-dark">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}