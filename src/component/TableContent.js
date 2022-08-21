import React from 'react'
import './Form.css';

const TableContent = ({formData}) => {
  return (
    <>
    <table>
    <h5 className="table-font">Personal Details</h5>
          <tr >
          <th>Name</th>
          <th>DOB/Age</th>
          <th>Sex</th>
          <th>Mobile</th>
          <th>Govt ID</th>
          <th>ID Number</th>
          
        </tr>

    {
      formData.map((item) =>(
        <>
         

        <tr key={item.id}>
          <td>{item.text.name}</td>
          <td>{item.text.dob}</td>
          <td>{item.text.sex}</td>
          <td>{item.text.mobile}</td>
          <td>{item.text.ID}</td>
          <td>{item.text.govtid}</td>
          
         

        </tr>

        
      </>
         
        
     
        
      ))
    }
    </table>
    
    
    </>
    
  )
}

export default TableContent




