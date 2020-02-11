import React from 'react';

export const TransferBank = () => {
    return (
        <>
        <div className="card mt-4">
            <div className="card-body">
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
                    <label>Transfer from </label>
                    <select className="form-control form-control-sm">
                        <option>select</option>
                    </select>
                    <label className="mt-4">Date</label>
                    <input type="date" className="form-control form-control-sm"/>
                </div>

                <div className="pr-3 w-25">
                    <label>Deposit to</label>
                    <select className="form-control form-control-sm">
                        <option>select</option>
                    </select>
                    <label className="mt-4">Tags</label>
                    <input type="date" className="form-control form-control-sm"/>
                </div>

                <div className="pr-3 w-25">
                    <label>Amount</label>
                    <input type="text" placeholder="amount" className="form-control form-control-sm"/>

                    <label className="mt-4">Attachment</label>
                    <input type="text" placeholder="attachment" className="form-control form-control-sm" disabled/>
                </div>

                <div className="pr-3 w-25">
                    <label>Transaction Number</label>
                    <input type="text" placeholder="auto" className="form-control form-control-sm" disabled/>
                </div>
            </div>
            </div>
            <div className="pl-0">
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