import React from 'react';
// import './Style.css';

export const TransferBank = () => {
    return (
        <div className="transferbank container mt-5">
            <div className="card">
                <div className="button-transferbank">
                    <button className="btn btn-dark">Export</button>
                    <button className="btn btn-dark">Print</button>
                    <button className="btn btn-dark">Save</button>
                    <button className="btn btn-dark">Edit</button>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div class="col">
                            <h6>Transfer from </h6>
                            <select className="custom-select">
                                <option>Make a selection</option>
                            </select>
                            <h6>Date</h6>
                            <input type="date" className="form-control"/>
                        </div>

                        <div class="col">
                            <h6>Deposit to</h6>
                            <select className="custom-select">
                                <option>Make a selection</option>
                            </select>
                            <h6>Tags</h6>
                            <input type="text" placeholder="input text" className="form-control"/>
                        </div>

                        <div class="col">
                            <h6>Amount</h6>
                            <input type="text" placeholder="input text" className="form-control"/>
                            <h6>Attachment Files</h6>
                            <input type="text" placeholder="input text" className="form-control"/>
                        </div>

                        <div class="col">
                            <h6>Transaction Number</h6>
                            <input type="text" placeholder="auto" className="form-control" disabled/>
                        </div>
                    </div>
                    <div className="memo">
                        <h6>Memo</h6>
                        <textarea name="memo-transferbank" id="memo-transferbank" rows="5"/>
                    </div>
                    <div className="button2-transferbank">
                        <button className="btn btn-success">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}