import React from 'react';
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import employees from './employees.json'
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/title';

function App() {
  return (
    <Wrapper>
      <Title>Employees</Title>
      <EmployeeCard
        picture={employees[0].picture.large}
        name={employees[0].name}
        email={employees[0].email}
        cell={employees[0].cell}
        gender={employees[0].gender}
        dob={employees[0].dob}
      />
       <EmployeeCard
       picture={employees[1].picture.large}
        name={employees[1].name}
        email={employees[1].email}
        cell={employees[1].cell}
        gender={employees[1].gender}
        dob={employees[1].dob}
      />
       <EmployeeCard
       picture={employees[2].picture.large}
        name={employees[2].name}
        email={employees[2].email}
        cell={employees[2].cell}
        gender={employees[2].gender}
        dob={employees[2].dob}
      />
    </Wrapper>

  );
}

export default App;
