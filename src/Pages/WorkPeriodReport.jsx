import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DashboardButton from "../Components/DashboardButton";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkPeriodReport = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  //Function to fetch the work period details of all the employees
  const fetchReports = async () => {
    try {
      const res = await axios.get(
        "https://role-based-access-control-system-backend.onrender.com/api/report/work-period-report"
      );
      setReports(res.data.result);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Function to download work period details of a particular employee in pdf
  const handleDownloadPDF = (id) => {
    window.open(
      `https://role-based-access-control-system-backend.onrender.com/api/report/work-period-report/pdf/${id}`,
      "_blank"
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center heading">Employee Work Period Report</h1>
        </div>
      </div>
      <div className="table-responsive row">
        <table className="table text-center shadow col">
          <thead className="table-heading">
            <tr className="shadow">
              <th className="shadow">Employee</th>
              <th className="shadow">Department</th>
              <th className="shadow">Role</th>
              <th className="shadow">Date of Joining</th>
              <th className="shadow">Work Period (Months)</th>
              <th className="shadow">Generate PDF</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.userName} className="shadow">
                <td className="shadow">{report.userName}</td>
                <td className="shadow">{report.department}</td>
                <td className="shadow">{report.role}</td>
                <td className="shadow">
                  {new Date(report.dateOfJoining).toLocaleDateString()}
                </td>
                <td className="shadow">{report.workPeriod}</td>
                <td className="shadow">
                  <button
                    className="btn btn-outline-info"
                    onClick={() => handleDownloadPDF(report._id)}
                  >
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DashboardButton />
    </div>
  );
};

export default WorkPeriodReport;
