<h1>Role Based Access Control</h1>
<h2>Introduction</h2>
<ul>
  <li>This repository contains the backend code for the Role Based Access Control application built as my MERN Full Stack Development course completion project(final project).</li>
  <li>This website a corporate intranet portal (website used by the employees of an organization with the organization).</li>
</ul>
<h2>Third Party Packages Used</h2>
<ol>
  <li>bcryptjs</li>
  <li>cors</li>
 <li>dotenv</li>
  <li>express</li>
  <li>jsonwebtoken</li>
  <li>mongoose</li>
  <li>nodemailer</li>
  <li>nodemon</li>
  <li>pdfkit</li>
</ol>
<h2>End Point Specifications</h2>
<p>The endpoints and the actions performed are listed below.</p>
<h2>Employee</h2>
<h3>Register Employee</h3>
<p><b>End Point: </b>/api/register-emp</p>
<p><b>Method:</b> POST</p>
<h3>Login Employee</h3>
<p><b>End Point: </b>/api/login-emp</p>
<p><b>Method: </b>POST</p>
<h3>Forgot Password</h3>
<p><b>End Point: </b>/api/forgot-password</p>
<p><b>Method: </b>POST</p>
<h3>Reset Password</h3>
<p><b>End Point: </b>/api/reset-password/:id/:token</p>
<p><b>Method: </b>POST</p>
<h3>Get Logged In Employee</h3>
<p><b>End Point: </b>/api/get-emp</p>
<p><b>Method: </b>GET</p>
<h3>Get Employee By Id</h3>
<p><b>End Point: </b>/api/get-employee-by-id/:id</p>
<p><b>Method: </b>GET</p>
<h3>Get All Employees</h3>
<p><b>End Point: </b>/api/get-all-emp</p>
<p><b>Method: </b>GET</p>
<h3>Get Employee To Assign Role and Department</h3>
<p><b>End Point: </b>/api/employee-assign-role/:id</p>
<p><b>Method: </b>GET</p>
<h3>Assign Role</h3>
<p><b>End Point: </b>/api/assign-role/:id</p>
<p><b>Method: </b>PUT</p>
<h3>Delete Employee</h3>
<p><b>End Point: </b>/api/delete-employee/:id</p>
<p><b>Method: </b>DELETE</p>
<h3>Update Profile</h3>
<p><b>End Point: </b> /api/update-employee/:id</p>
<p><b>Method: </b>PUT</p>
<h2>Department</h2>
<h3>Create Department</h3>
<p><b>End Point: </b>/api/department/create-department</p>
<p><b>Method: </b>POST</p>
<h3>Get All Departments</h3>
<p><b>End Point: </b>/api/department/get-departments</p>
<p><b>Method: </b>GET</p>
<h3>Get Department By Id</h3>
<p><b>End Point: </b>/api/department/get-department-by-id/:id</p>
<p><b>Method: </b>GET</p>
<h3>Update Department</h3>
<p><b>End Point: </b>/api/department/edit-department/:id</p>
<p><b>Method: </b>PUT</p>
<h3>Delete Department</h3>
<p><b>End Point: </b>/api/department/delete-department/:id</p>
<p><b>Method: </b>DELETE</p>
<h2>Role</h2>
<h3>Create Role</h3>
<p><b>End Point: </b> /api/role/create-role</p>
<p><b>Method: </b>POST</p>
<h3>Get All Roles</h3>
<p><b>End Point: </b>/api/role/get-roles</p>
<p><b>Method: </b>GET</p>
<h3>Get Role By Id</h3>
<p><b>End Point: </b>/api/role/get-role-by-id/:id</p>
<p><b>Method: </b>GET</p>
<h3>Update Role</h3>
<p><b>End Point: </b>/api/role/edit-role/:id</p>
<p><b>Method: </b>PUT</p>
<h3>Delete Role</h3>
<p><b>End Point: </b>/api/role/delete-role/:id</p>
<p><b>Method: </b>DELETE</p>
<h2>Report</h2>
<h3>Get Promotion Details</h3>
<p><b>End Point: </b>/api/report/role-promotion-report</p>
<p><b>Method: </b>GET</p>
<h3>Get Work Period Details</h3>
<p><b>End Point: </b>/api/report/work-period-report</p>
<p><b>Method: </b>GET</p>
<h3>Download Promotion Report PDF</h3>
<p><b>End Point: </b>/api/report/role-promotion-report/pdf/:id</p>
<p><b>Method: </b>GET</p>
<h3>Download Work Period Report PDF</h3>
<p><b>End Point: </b>/api/report/work-period-report/pdf/:id</p>
<p><b>Method: </b>GET</p>

## FrontEnd Netlify Deployed URL ⌛

🔸*Click on the Badge to Check out My Password Reset Application Here*👉🏻 [![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)](https://lambent-kulfi-76a377.netlify.app)

## BackEnd Render Deployed URL ⌛
🔸[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://capestone-be.onrender.com)

## Frontend GitHub Repository URL ⌛
🔸*Click on the Badge to Check out My BackEnd GitHub Repository Here*👉🏻[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Aravindhan-K97/Capestone-FE)
