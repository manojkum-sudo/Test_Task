import React from 'react'
import './Form.css';

const OtherDetail = ({formData}) => {
  return (
    <>
    <div className="last">
    <table >
    <h5 className="table-font">Other Details</h5>
          <tr >
          <th>Occupation</th>
          <th>Religion</th>
          <th>Marital Status</th>
          <th>Blood Group</th>
          <th>Nationality</th>
          
          
        </tr>

    {
      formData.map((item) =>(
        <>
         

        <tr key={item.id}>
          <td>{item.text.occupation}</td>
          <td>{item.text.religion}</td>
          <td>{item.text.marital}</td>
          <td>{item.text.blood}</td>
          <td>{item.text.nationality}</td>
         
         

        </tr>

        
      </>
         
        
     
        
      ))
    }
    </table>
    </div>
    
    
    </>
    
  )
}

export default OtherDetail




