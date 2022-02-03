import React from 'react';

export const TableItem = (props) => {

    const { user, editUser, removeUser, viewUser } = props;

    return <tr className='text-center' >
        <th scope="row">1</th>
        <td>{ user.first_name }</td>
        <td>{ user.last_name }</td>
        <td>{ user.email }</td>
        <td>
            <button onClick={() => editUser(user.id)} type="button" className="btn btn-warning">
                <i className="bi bi-pencil-square"></i>
            </button>
        </td>
        <td>
            <button onClick={() => removeUser(user.id)} type="button" className="btn btn-danger">
                <i className="bi bi-trash-fill"></i>
            </button>
        </td>
        <td>
            <button onClick={() => viewUser(user.id)} type="button" className="btn btn-secondary">
                <i className="bi bi-eye-fill"></i>
            </button>
        </td>
    </tr>;
};
