import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [fristName, setFristName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, [])

  const handleAdd = e => {
    e.preventDefault();
    if (!fristName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: "Error",
        text: "All inputs are Required",
        showConfirmButton: true

      })
    }
    const id = employees.length + 1;
    const newEmpoloyee = {
      id,
      fristName,
      lastName,
      email,
      salary,
      date
    }

    employees.push(newEmpoloyee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: "Aded",
      text: `${fristName} ${lastName}'s data hase been Aded`,
      showConfirmButton: false,
      timer: 1500

    })

  }

  return (
    <div className='small-container'>
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor='fristName'>Frist Name</label>
        <input
          id='fristName'
          type="text"
          ref={textInput}
          name="fristName"
          value={fristName}
          onChange={e => setFristName(e.target.value)}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          id='lasttName'
          type="text"
          name="lasttName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor='email'>email</label>
        <input
          id='email'
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor='salary'>Salary ($)</label>
        <input
          id='salary'
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancle"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  )
}

export default Add