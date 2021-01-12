import React from 'react';

function EmployeeCard(props) {
    return (
          <div className="card">
            <div className="img-container">
              <img alt={props.first} src={props.picture} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {props.name.first} {props.name.last}
                </li>
                <li>
                  <strong>Email:</strong> {props.email}
                </li>
                <li>
                  <strong>Cell Phone:</strong> {props.cell}
                </li>
                <li>
                  <strong>Gender:</strong> {props.gender}
                </li>
              </ul>
            </div>
          </div>
        );
      }

export default EmployeeCard;