import React from 'react'
import './Form.css';

const Address = ({formData}) => {
  return (
    <>
    <table>
    <h5 className="table-font">Address Details</h5>
          <tr >
          <th>Address</th>
          <th>State</th>
          <th>City</th>
          <th>Country</th>
          <th>Pincode</th>
          
          
        </tr>

    {
      formData.map((item) =>(
        <>
         

        <tr key={item.id}>
          <td>{item.text.address}</td>
          <td>{item.text.state}</td>
          <td>{item.text.city}</td>
          <td>{item.text.country}</td>
          <td>{item.text.pincode}</td>
         
         

        </tr>

        
      </>
         
        
     
        
      ))
    }
    </table>
    
    
    </>
    
  )
}

export default Address




