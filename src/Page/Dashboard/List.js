import React from 'react'

const List = ({ employees, handleEdite, handeleDelete }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
    minimumFractionDigits: null
  })
  return (
    <div className='contain-table'>
      <table className='striped-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>frist Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">Actions</th>

          </tr>
        </thead>

        <tbody>
          {
            employees.length > 0 ? (
              employees.map((employee, i) => (
                <tr key={employee.id}>
                  <td>{i + 1}</td>
                  <td>{employee.fristName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{formatter.format(employee.salary)}</td>
                  <td>{employee.data}</td>
                  <td className='text-right'>
                    <button
                      onClick={() => handleEdite(employee.id)}
                      className="button muted-button"
                    >
                      Edite
                    </button>
                  </td>
                  <td className='text-left'>
                    <button
                      onClick={() => handeleDelete(employee.id)}
                      className="button muted-button"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <th>
                <td colSpan={7}>No Empolees</td>
              </th>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default List