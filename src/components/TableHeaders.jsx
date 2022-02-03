import React from 'react';

const TableHeaders = (props) => {


    return <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">email</th>
        <th scope="col">Edit</th>
        <th scope="col">Remove</th>
        <th scope="col">View</th>
    </tr>;
};

export default TableHeaders;
