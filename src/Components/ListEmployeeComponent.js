import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {
  
    const[employees, setEmployees]=useState([])  
   
    useEffect(() => {
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data);
        }).catch(erorr=>{
            console.log(erorr)
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'> List Employees </h2>  
            {/* Below add employee show as a button */}
            <Link to ="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
            <table className='table table-bordered table-striped'>
                {/* Add table headers */}
                <thead>
                    {/* Add column names */}
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </thead>
                {/* Add the table body */}
                <tbody>
                    {
                        employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className='btn btn-info' to={'/edit-employee/${employee.id}'}> Update</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>                
            </table>  
        </div>
    )
}

export default ListEmployeeComponent