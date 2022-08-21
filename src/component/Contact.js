import React from 'react'
import './Form.css';

const Contact = ({formData}) => {
  return (
    <>
    <table>
    <h5 className="table-font">Contact Details</h5>
          <tr >
          <th>Guardian Type</th>
          <th>Guardian</th>
          <th>Email</th>
          <th>Emergency Contact No</th>
          
          
        </tr>

    {
      formData.map((item) =>(
        <>
         

        <tr key={item.id}>
          <td>{item.text.guardiantype}</td>
          <td>{item.text.guardian}</td>
          <td>{item.text.email}</td>
          <td>{item.text.phone}</td>
         
         

        </tr>

        
      </>
         
        
     
        
      ))
    }
    </table>
    
    
    </>
    
  )
}

export default Contact




