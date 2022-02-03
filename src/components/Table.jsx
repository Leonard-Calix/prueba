import React from 'react';
import { TableItem } from './TableItem';

export const Table = () => {

    const users = [
        { id: 1, first_name: "Ediva", last_name: "Sillick", email: "esillick0@etsy.com" },
        { id: 2, first_name: "Robin", last_name: "Rattenberie", email: "rrattenberie1@home.pl" },
        { id: 3, first_name: "Elysha", last_name: "Durbyn", email: "edurbyn2@samsung.com" },
    ];

    const editUser = (id) => {
        console.log('Edit the user with the id ', id);
    };

    const removeUser = (id) => {
        console.log('delete user with id', id);
    };

    const viewUser = (id) => {
        console.log('See the user with the id ', id);
    };

    return (
        <table className="table table-sm text-center">
            <thead className='table-dark' >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Remove</th>
                    <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        return <TableItem
                            key={user.id}
                            user={user}
                            viewUser={viewUser}
                            editUser={editUser}
                            removeUser={removeUser}
                        />
                    })
                }
            </tbody>
        </table>
    );
};
