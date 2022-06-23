import React, { useState } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Add from './Add';
import Edite from './Edite';
import List from './List';

import { employeesData } from '../../data/index';

function Dashboard() {

  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEdidting, setIsEditing] = useState(false);


  const handleEdite = (id) => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectEmployee(employee);
    setIsEditing(true);
  }
  const handeleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter(employee => employee.id !== id));
      }
    });
  }

  return (
    <div className='container'>
      {!isAdding && !isEdidting && (
        <>
          <Header
            setIsAdding={setIsAdding}
          />
          {/* List */}
          <List
            employees={employees}
            handleEdite={handleEdite}
            handeleDelete={handeleDelete}
          />
        </>
      )}
      {isAdding && (
        //  Add 
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* isEditing */}
      {isEdidting && (
        <Edite
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  )
}

export default Dashboard