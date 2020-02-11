import React from 'react';

export const ContactList = (props) => {

    const handleCostumer = () => {
        props.history.push('/costumer')
    }
    const handleSupplier = () => {
        props.history.push('/supplier')
    }
    const handleEmployee = () => {
        props.history.push('/employee')
    }
    const handleOther = () => {
        props.history.push('/other')
    }


    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleCostumer}>Costumer</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleSupplier}>Supplier</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleEmployee}>Employee</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleOther}>Other</button>
                </div>
                <div className="d-flex flex-column mb-5">
                    <div className="d-flex mb-4 justify-content-end">
                        <button className="btn btn-sm btn-secondary mr-2">Edit</button>
                        <button className="btn btn-sm btn-secondary mr-2">Save</button>
                        <button className="btn btn-sm btn-secondary mr-2">Print</button>
                        <button className="btn btn-sm btn-secondary">Export</button>
                    </div>
                </div>

                <h4>Expense List</h4>
                <hr/>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Mobile Phone</th>
                            <th>Balance</th>
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

                        </tr>       
                    </tbody>
                </table>
            </div>
        </div>
    )
}