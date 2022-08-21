import React,{useState} from 'react'
import { useFormik } from "formik";
import './Form.css';
import TableContent from './TableContent';
import Contact from './Contact';
import Address from './Address';
import OtherDetail from './OtherDetail';

const initialValues = 
    {
        name: "",
        dob: "",
        sex: "",
        mobile: "",
        govtid: "",
        ID: "",
        guardiantype: "",
        guardian: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        occupation: "",
        religion: "",
        marital: "",
        blood: "",
        nationality: ""
        
      };



const Form = () => {
    const [user, setUser] = useState(initialValues);
    const [formData, setFormData] = useState([]);
    const[isSubmit,setIsSubmit] = useState(false);


    const { values, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      //validationSchema: signUpSchema,
      onSubmit: (values) => {
        
        console.log(
          values
        );
        //action.resetForm();
        
        
      },
    });
  console.log(

    errors
  );
  console.log(initialValues);

  const handleChange =(e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleValue = (e) => {
    e.preventDefault();
    
    //setFormData(user);
    setFormData([...formData,{text:user,id:Math.random()*1000}]);
   
    setUser(" ");
    setIsSubmit(true);
    
    
    
  };

  return (
    <div className="container">
    <form  >
        <h5>Personal Details</h5>
              <div className="input-field">
                  <label for="name" >Name<span className="star">*</span></label>
                  <input type="text" className="form-control1" placeholder="Enter name" id="name" name="name"  value={user.name}
                      onChange={handleChange}
                      onBlur={handleBlur} required />
                      {errors.name && touched.name ? (
                      <p className="form-error">{values.name}</p>
                    ) : null}

                  <label for="birth" >Date of Birth or <br /> Age<span className="star">*</span></label>
                  <input type="text" className="form-control2" placeholder="DD/MM/YYYY or Age in Years" id="dob" name="dob"
                   value={user.dob}
                   onChange={handleChange}
                   onBlur={handleBlur} required />

                  <label for="name" >Sex<span className="star">*</span></label>
                  <select className="text" value={user.sex} name="sex" id="sex"
                   onChange={handleChange}
                   onBlur={handleBlur}>
                      <option value="">Enter sex</option>
                      <option value="male">male</option>
                      <option value="female">female</option>

                  </select>
              </div>

              <div className="input-field">
                  <label for="name" >Mobile<span className="star">*</span></label>
                  <input type="number" className="form-control3" placeholder="Enter mobile" id="mobile" name="mobile" 
                   value={user.mobile}
                   onChange={handleChange}
                   onBlur={handleBlur} required />

                  <label className="id" >Govt ID Issued <span className="star">*</span></label>
                  <select className="text" value={user.ID} name="ID" id="ID" onChange={handleChange} onBlur={handleBlur} required>
                      <option value="">ID type</option>
                      <option value="adhar">adhar</option>
                      <option value="votercard">voter card</option>

                  </select>
                  <input type="number" className="form-control4" placeholder="Enter Govt ID" id="govtid" name="govtid"
                   value={user.govtid}
                   onChange={handleChange}
                   onBlur={handleBlur} required />
                        
              </div>

              {/* ........................CONTACT DETAILS.............................. */}

              <h5>Contact Details</h5>
              <div className="input-field">
              <label className="guardian" >Guardian Details<span className="star">*</span></label>
                  <select className="text" value={user.guardiantype} name="guardiantype" id="guardiantype" onChange={handleChange} onBlur={handleBlur} required>
                      <option value="">Enter Label</option>
                      <option value="grand parent">grand parent</option>
                      <option value="relative">relative</option>

                  </select>
                  <input type="text" className="form-control5" placeholder="Enter Guardian name" id="guardian" name="guardian"
                   value={user.guardian}
                   onChange={handleChange}
                   onBlur={handleBlur} required />

                  <label for="email" >Email<span className="star">*</span></label>
                  <input type="email" className="form-control6" placeholder="Enter email" id="email" name="email" 
                   value={user.email}
                   onChange={handleChange}
                   onBlur={handleBlur} required />

                  <label for="phone" >Emergency Contact <br /> number <span className="star">*</span></label>
                  <input type="number" className="form-control7" placeholder="Enter No " id="phone" name="phone" 
                   value={user.phone}
                   onChange={handleChange}
                   onBlur={handleBlur} required />   

              </div>

              {/* ........................ADDRESS DETAILS.............................. */}

              <h5>Address Details</h5>
              <div className="input-field">
              <label for="address" >Address<span className="star">*</span></label>
              <input type="text" className="form-control8" placeholder="Enter address" id="address" name="address"
               value={user.address}
               onChange={handleChange}
               onBlur={handleBlur} required  />

              <label for="state" >State<span className="star">*</span></label>
              <select className="state"  value={user.state} name="state" id="state" onChange={handleChange} onBlur={handleBlur} required>
                      <option value="">Enter state</option>
                      <option value="delhi">delhi</option>
                      <option value="punjab">punjab</option>
                      <option value="kashmir">kashmir</option>
                      <option value="haryana">haryana</option>
                      <option value="maharastra">maharastra</option>
                      

                  </select>

              <label for="city" >City<span className="star">*</span></label>
              <select className="state"  value={user.city} name="city" id="city" onChange={handleChange} onBlur={handleBlur} required>
                      <option value="">Enter City/Town</option>
                      <option value="delhi">new delhi</option>
                      <option value="chandigargh">chandigargh</option>
                      <option value="srinagar">srinagar</option>
                      <option value="karnal">karnal</option>
                      <option value="mumbai">mumbai</option>
                      

                  </select>

              </div>

              <div className="input1">
              <label for="country" >Country<span className="star">*</span></label>
              <input type="text" className="form-control9" placeholder="Enter country" id="country" name="country"
               value={user.country}
               onChange={handleChange}
               onBlur={handleBlur} required />

              <label for="pincode" >Pincode<span className="star">*</span></label>
              <input type="number" className="form-control" placeholder="Enter Pincode" id="pincode" name="pincode"
               value={user.pincode}
               onChange={handleChange}
               onBlur={handleBlur} required />
              </div>


              {/* ........................OTHER DETAILS.............................. */}


              <h5>Other Details</h5>
              <div className="input-field">
              <label for="occupation" >Occupation<span className="star">*</span></label>
              <input type="text" className="form-control10" placeholder="Enter Occupation" id="occupation" name="occupation"
               value={user.occupation}
               onChange={handleChange}
               onBlur={handleBlur} required />

              <label for="reli" >Religion<span className="star">*</span></label>
              <select className="text"  value={user.religion} name="religion" id="religion" onChange={handleChange} onBlur={handleBlur}  required>
                      <option value="">Enter Religion</option>
                      <option value="hindu">Hindu</option>
                      <option value="muslim">Muslim</option>
                      <option value="sikh">sikh</option>
                      <option value="christian">christian</option>

                  </select>

              <label for="marital" >Marital Status<span className="star">*</span></label>
              <select className="text"  value={user.marital} name="marital" id="marital" onChange={handleChange} onBlur={handleBlur} required>
                      <option value="">Marital status</option>
                      <option value="single">single</option>
                      <option value="married">married</option>

                  </select>

               <label for="blood" >Blood Group<span className="star">*</span></label>
              <select className="text"  value={user.blood} name="blood" id="blood" onChange={handleChange} onBlur={handleBlur} required>
                      <option value="">Blood Group</option>
                      <option value="A">A+</option>
                      <option value="B">B+</option>
                      <option value="o">o+</option>
                      <option value="B">B-</option>

                  </select>   

              </div>
              
              <div className="input1">
              <label for="nationality" >Nationality<span className="star">*</span></label>
              <input type="text" className="form-control11" placeholder="Enter Nationality" id="nationality" name="nationality"
               value={user.nationality}
               onChange={handleChange}
               onBlur={handleBlur} required />
              </div>


              <div className="btn">
                <button className="cancel">CANCEL</button>
                <button className="submit" onClick={handleValue} >SUBMIT</button>
              </div>

    </form>

    { isSubmit && <TableContent formData={formData}  />}
    { isSubmit && <Contact formData={formData}  />}
    { isSubmit && <Address formData={formData}  />}
    { isSubmit && <OtherDetail formData={formData} />}  
    
    </div>
  )
}

export default Form