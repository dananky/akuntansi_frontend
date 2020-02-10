import React from 'react';

export const CashBank = (props) => {

    const handlePayMoney = () => {
        props.history.push('/paymoney')
    }
    const handleReceiveMoney = () => {
        props.history.push('/receivemoney')
    }
    const handleTransferBank = () => {
        props.history.push('/transferbank')
    }

    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handlePayMoney}>Pay Money</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleReceiveMoney}>Receive Money</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleTransferBank}>Transfer Bank</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                </div>

                <h4>List Of Account</h4>
                <hr/>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Account Code</th>
                            <th>Account Name</th>
                            <th>Balance</th>
                            <th>Memo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Cash</td>
                            <td>Rp.200.000</td>
                            <td>trial</td>
                        </tr>       
                    </tbody>
                </table>
            </div>
        </div>
    )
}