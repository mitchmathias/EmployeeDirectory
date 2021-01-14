import React, { Component } from 'react';
import EmployeeTable from './components/EmployeeTable.js'
import Search from './components/Search.js'
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/title';
import API from './utils/API'


class App extends Component {

  state= {
    search: "",
    employees: [],
    filtEmployees: [],
  }

  componentDidMount() {
    this.getEmp()
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, function(){
      const searched = this.state.search.toLowerCase()
      const filteredEmp = this.state.employees.filter(emp => {
        let fullName = `${emp.name.first} ${emp.name.last}`
        fullName = fullName.toLowerCase()
        return fullName.includes(searched)
      })
      this.setState({filtEmployees: filteredEmp})
    })
  }

  keyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
      }
  }

  getEmp = () => {
    API.getEmployees().then(res => {
      console.log(res.data.results)
      this.setState({employees: res.data.results, filtEmployees: res.data.results})
    })
  }


  render() {
    return (
      <Wrapper>
        <Title>Employees</Title>
        <Search 
        search={this.state.search} 
        keyPress={this.keyPress} 
        handleInputChange= {this.handleInputChange}/>
        <EmployeeTable 
          filtEmployees ={this.state.filtEmployees}
        />

      </Wrapper>

    );
  }
}

export default App;
