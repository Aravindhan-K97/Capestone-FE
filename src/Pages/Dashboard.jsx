import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [resdata, setResData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const { currentUser } = useSelector((state) => state.employee);

  useEffect(() => {
    fetchData();
    fetchEmployees();
  }, []);

  //Function to get the details of the logged in user
  const fetchData = async () => {
    await axios
      .get("https://capestone-be.onrender.com/api/get-emp", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
      })
      .then((res) => {
        setResData(res.data.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  //Function to fetch the data of all the registered employees
  const fetchEmployees = async () => {
    try {
      await axios.get("https://capestone-be.onrender.com/api/get-all-emp").then((res) => {
        setEmployees(res.data.result);
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Sidebar />
        <div className="col-md-9 col-lg-10 mt-3 dashboard-content">
          <div className="row">
            <div className="col">
              <h1 className="text-center heading">Employees</h1>
              <div className="table-responsive">
                <table className="table text-center shadow">
                  <thead className="table-heading">
                    <tr className="shadow">
                      <th className="shadow">User Name</th>
                      <th className="shadow">Email</th>
                      <th className="shadow">Date Of Joining</th>
                      <th className="shadow">Role</th>
                      <th className="shadow">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => {
                      return (
                        <tr key={employee._id} className="shadow">
                          <td className="shadow">{employee.userName}</td>
                          <td className="shadow">{employee.email}</td>
                          <td className="shadow">
                            {employee.dateOfJoining.slice(0, 10)}
                          </td>
                          <td className="shadow">
                            {employee.role
                              ? employee.role.role
                              : "Not Yet Assigned"}
                          </td>
                          <td className="shadow">
                            {employee.department
                              ? employee.department.departmentName
                              : "Not Yet Assigned"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
