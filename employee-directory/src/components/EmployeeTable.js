import React from 'react';

function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell Phone</th>
                </tr>
            </thead>
            <tbody>{props.filtEmployees.map((emp, i) => (
                <tr key={i}>
                    <td><img alt={emp.name.first} src={emp.picture.thumbnail} /></td>
                    <td>{emp.name.first} {emp.name.last}</td>
                    <td>{emp.email}</td>
                    <td>{emp.cell}</td>
                </tr>
            ))}</tbody>

        </table>
    )
};

export default EmployeeTable