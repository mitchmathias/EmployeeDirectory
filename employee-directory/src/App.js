import React from 'react';
import EmployeeCard from './components/EmployeeCard/EmployeeCard'
import employees from './employees.json'

function App() {
  return (
      <EmployeeCard
       name={employees[0].name}
       email={employees[0].email}
       cell={employees[0].cell}
       gender={employees[0].gender}
       dob={employees[0].dob}
        />
  );
}

export default App;
