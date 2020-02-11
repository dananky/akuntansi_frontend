import React from 'react';

export const Setting = (props) => {

    const handlePreference = () => {
        props.history.push('/preference')
    }
    const handleEmail = () => {
        props.history.push('/email')
    }
    const handleNotification = () => {
        props.history.push('/notification')
    }


    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePreference}>Preference</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleEmail}>Email Template</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleNotification}>Notification</button>
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