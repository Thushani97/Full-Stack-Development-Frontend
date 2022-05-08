import axios from "axios";
// This is the port of backend 
const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:2002/api/v1/employees'

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
}

export default new EmployeeService();