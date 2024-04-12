import { tableData } from "@common/JsonData";
import React from "react";

const BasicTable = () => {
    return (
        <React.Fragment>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-header">
                        <h5>Basic Table</h5>
                        <span className="d-block m-t-5">use class <code>table</code> inside table element</span>
                    </div>
                    <div className="card-body table-border-style">
                        <div className="table-responsive">
                            <table className="table" id="pc-dt-simple">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Ext.</th>
                                        <th>City</th>
                                        <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                                        <th>Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (tableData || [])?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.ext}</td>
                                                <td>{item.city}</td>
                                                <td>{item.date}</td>
                                                <td>{item.completion}%</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicTable;