import React from 'react';

export const AssetManagement = (props) => {

    const handleRecordAsset = () => {
        props.history.push('/recordasset')
    }
    const handleDisposalAsset = () => {
        props.history.push('/disposalasset')
    }
    const handleDepreciation = () => {
        props.history.push('/depreciation')
    }


    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleRecordAsset}>Record of Asset</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleDisposalAsset}>Disposal of Asset</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleDepreciation}>Depreciation</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                </div>

                <h4>Fixed Asset List</h4>
                <hr/>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Select</th>
                            <th>Asset Code</th>
                            <th>Asset Name</th>
                            <th>Qty</th>
                            <th>Buy Date</th>
                            <th>Buy Use</th>
                            <th>Buy Price</th>
                            <th>Status</th>
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
                                <input type="text" className="form-control" placeholder="input text"/>
                            </td>
                            <td>
                                <input type="text" className="form-control" placeholder="input text"/>
                            </td>
                        </tr>       
                    </tbody>
                </table>
            </div>
        </div>
    )
}