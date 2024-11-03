import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import ContactComponent from "./ContactComponent";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      deleteEmployee(id)
        .then(() => {
          getAllEmployees();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="container">
      <h2
        className="text-center"
        style={{ color: "black", paddingTop: "50px", paddingBottom: "20px" }}
      >
        EMPLOYEES
      </h2>

      <button
        className="btn btn-outline-dark mb-4"
        onClick={addNewEmployee}
        style={{ backgroundColor: "purple", color: "white", maxWidth: "230px" }}
      >
        ADD EMPLOYEE
      </button>
      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-4 mb-4" key={employee.id}>
            <div
              className="card h-100"
              style={{
                borderColor: "black",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">
                  {employee.firstName} {employee.lastName}
                </h5>
                <p className="card-text">Department Email: {employee.email}</p>
                <p className="card-text">Employee ID: {employee.id}</p>
                <div>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => updateEmployee(employee.id)}
                    style={{ color: "rgba(150, 150, 0, 0.8)" }}
                  >
                    UPDATE
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => removeEmployee(employee.id)}
                    style={{
                      color: "red",
                      marginLeft: "10px",
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ContactComponent onSubmit={handleSubmit} />
    </div>
  );
};

export default ListEmployeeComponent;
