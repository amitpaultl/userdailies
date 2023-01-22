import React, { useState } from 'react';

const Table = ({ tabledata }) => {
    const [toggle, setToggle] = useState(false)

    const handel = () => {
        setToggle(current => !current)
    }
 

    return (
        <div>
            <div className="single-table">

                <table>

                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Contact</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account">{tabledata.name}</td>
                            <td data-label="Due Date">{tabledata.concate}</td>
                            <td data-label="Amount">{tabledata.city}</td>
                            <td data-label="Period">{tabledata.state}</td>
                            <td data-label="Period" onClick={handel} > {
                                toggle ? <span className='btu'>Hide Details</span> : <span className='btu'> view Details</span>
                            }   </td>
                        </tr>

                    </tbody>
                </table>
                <div className="info-ditties" style={toggle ? { display: "block" } : { display: "none" }}>
                    <h3>Description</h3>
                    <p>{tabledata.about}</p>

                    <div className="other-info">
                        <div className="other-right">
                            <h3>Contact Person</h3>
                            <p>{tabledata.concate}</p>
                            <h3>Designation</h3>
                            <p>{tabledata.designation}</p>
                            <h3>Phones</h3>
                            <p>{tabledata.phone}</p>
                        </div>
                        <div className="other-left">
                            <h3>Address</h3>
                            <p>{tabledata.address}</p>
                            <h3>City</h3>
                            <p>{tabledata.city}</p>
                            <h3>Country</h3>
                            <p>{tabledata.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;