
import React from 'react';


export default function Student() {
   
      
        return (
            
            <div className="container">
                
         
                <form >
                    <h1>Student Details</h1>
                    <div className="form-group">
                        <label>Name</label> 
                         <input type="text" id="studentNmae" className="form-control" placeholder='Enter your Name' />
                    </div>
                    <div className="form-group">
                        <label>DOB</label>
                        <input type="date" id='studentDob' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Class</label>
                        <input type="text" id="studentClass" className="form-control" placeholder='Enter your Class' />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" id='studentAddress' className="form-control"placeholder='Enter your Address' />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id='studentEmail' className="form-control" placeholder='adb@gmail.com'/>
                    </div>
                    <div className="form-group">
                        <label>PhoneNumber</label>
                        <input type="tel" id="studentphone" className="form-control" placeholder='98884' />
                    </div>
                    <div className="form-group">
                        <label>Sex</label>&ensp; &ensp; &ensp;  <span>
  <input id="studsex" class="form-check-input" type="radio" name="flexRadioDefault"/>
  <label class="form-check-label" for="flexRadioDefault1">
   Male
  </label>
  </span> &ensp; &ensp; &ensp;  <span>
  <input id="studsex" class="form-check-input" type="radio" name="flexRadioDefault" />
  <label class="form-check-label" for="flexRadioDefault1">
   Female
  </label>
  </span>
                       
 
                    </div>
                    <button type="submit"   class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
