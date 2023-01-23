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
                            <th scope="col">suite</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account">{tabledata.name}</td>
                            <td data-label="Due Date">{tabledata.address.suite}</td>
                            <td data-label="Amount">{tabledata.address.city}</td>
                            <td data-label="Period">{tabledata.address.street}</td>
                            <td data-label="Period" onClick={handel} > {
                                toggle ? <span className='btu'>Hide Details</span> : <span className='btu'> view Details</span>
                            }   </td>
                        </tr>

                    </tbody>
                </table>
                <div className="info-ditties" style={toggle ? { display: "block" } : { display: "none" }}>
                    <h3>Description</h3>
                    <p>{tabledata.company.catchPhrase}</p>

                    <div className="other-info">
                        <div className="other-right">
                            <h3>Company Name</h3>
                            <p>{tabledata.company.name}</p>
                            <h3>Website</h3>
                            <p>{tabledata.website}</p>
                            <h3>Phones</h3>
                            <p>{tabledata.phone}</p>
                        </div>
                        <div className="other-left">
                            <h3>Address</h3>
                            <p>{tabledata.address.street}</p>
                            <h3>City</h3>
                            <p>{tabledata.address.city}</p>
                            <h3>Username</h3>
                            <p>{tabledata.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;