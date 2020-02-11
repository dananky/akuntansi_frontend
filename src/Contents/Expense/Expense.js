import React from 'react';

export const Expense = (props) => {

    const handleCreateExpense = () => {
        props.history.push('/createexpense')
    }
    const handleExpenseCategory = () => {
        props.history.push('/expensecategory')
    }


    return (
            
        <div className="card mt-4">
            <div className="card-body">
                <div className="d-flex mb-5">
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleCreateExpense}>Create Expense</button>
                    <button className="btn btn-md btn-secondary mr-2" onClick={handleExpenseCategory}>Expense Category</button>
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
                            <th>Date</th>
                            <th>Number</th>
                            <th>Category</th>
                            <th>Supplier</th>
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
                                <input type="date" className="form-control" placeholder="input text"/>
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
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Rp</span>
                                    </div>
                                    <input type="number" className="form-control" aria-describedby="basic-addon1"/>
                                </div>
                            </td>
                        </tr>       
                    </tbody>
                </table>
            </div>
        </div>
    )
}