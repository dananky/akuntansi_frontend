import React from 'react';

export const Tax = () => {
    return (
        <div className="tax container mt-5">
            <div className="button-tax">
                <button className="btn btn-dark">Montly Tax</button>
                <button className="btn btn-dark">Annual Tax</button>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <div className="button2-tax">
                        <button className="btn btn-dark">Export</button>
                        <button className="btn btn-dark">Print</button>
                        <button className="btn btn-dark">Save</button>
                        <button className="btn btn-dark">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}