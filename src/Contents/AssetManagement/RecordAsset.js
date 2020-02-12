import React from 'react';

export const RecordAsset = () => {
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
                <h4>Asset Details</h4>
                <hr/>
                <div className="d-flex">
                    <div className="pr-3 w-30">
                        <label>Asset Name</label>
                        <input type="text" className="form-control form-control-sm" placeholder="auto"/>
                        <label className="mt-4">Asset Number</label>
                        <input type="text" className="form-control form-control-sm" placeholder="auto"/>
                        <label className="mt-4">Fixed Asset Account</label>
                        <input type="date" className="form-control form-control-sm" placeholder="auto"/>
                        <label className="mt-4">Description</label>
                        <textarea
                            className="form-control form-control-sm"
                            type="text"
                            placeholder="auto"
                        ></textarea>
                    </div>
                    <div className="pr-3 w-30">
                        <label>Acquisition Date</label>
                        <input type="date" className="form-control form-control-sm" placeholder="auto"/>
                        <label className="mt-4">Acquisition Cost</label>
                        <input type="date" className="form-control form-control-sm" placeholder="auto"/>
                        <label className="mt-4">Account Credited</label>
                        <input type="date" className="form-control form-control-sm" placeholder="auto"/>
                        <label className="mt-4">Tags</label>
                        <input type="text" className="form-control form-control-sm" placeholder="auto"/>
                    </div>
                </div>
                </div>
                <h4>Depreciation</h4>
                <hr/>
                <div className="pl-0">
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