import React from 'react'
import "../../css/Warden/W_Add_St_Popup.css"
import { edit_Emp } from '../../endpoints/endpoint';

export const C_Edit_CS_Popup = ({childToParent, editCS}) => {

    const [name, setName ] = React.useState(editCS.name);
    const [phNo, setPhNo ] = React.useState(editCS.phNo);
    const [jobId, setjobId ] = React.useState(editCS.jobId);
    const [address, setAddress ] = React.useState(editCS.address);
    const [password, setPassword ] = React.useState("");
    const [onDuty, setOnDuty ] = React.useState(false);
    const [email, setEmail ] = React.useState(editCS.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        editEmp()
    }

    const editEmp = async() =>{
        let response = {};
        
        let message = { 
            'id' : editCS._id,
            'name': name,
            'phNo': phNo,
            'jobId': jobId,
            'address': address,
            'password': password,
            'onDuty': onDuty,
            'email': email,
        }
        
        response = await edit_Emp(message)
        console.log(response);
        childToParent('close cs popup');
    }


  return (
    <div className='w_add_st_popup_container'>
                <form className="registerform" onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            <div className="infobox">
                <div className="inputs">
                    <span className="input1">
                        <label className="labels" for="">Email ID</label>
                        <input type="email" name="" id="in_email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </span>
                    <span className="input2">
                        <label className="labels" for="">Password</label>
                        <input type="password" name="" id="in_password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password"/>
                    </span>
                    <span className="input3">
                        <label className="labels" for="">Job Id</label>
                        <input type="number" name="" id="in_jobid"  value={jobId} onChange={(e) => setjobId(e.target.value)} required/>
                    </span>
                    <span className="input4">
                        <label className="labels" for="">Name</label>
                        <input type="text" name="" id="in_name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                    </span>
                    <span className="input5">
                        <label className="labels" for="">Phone No</label>
                        <input type="number" name="" id="in_phoneno" minLength={10} maxLength={10} value={phNo} onChange={(e) => setPhNo(e.target.value)} required/>
                    </span>
                    <span className="input6">
                        <label className="labels" for="">On Duty</label>
                        <input type="checkbox" name="" id="in_onduty"  value={onDuty} onChange={(e) => setOnDuty(e.target.value)} required/>
                    </span>
                    <span className="input7">
                        <label className="labels" for="">Address</label>
                        <input type="text" name="" id="in_address"  value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </span>
                   
                </div>
            </div>
            <div className="errormsg"></div>
            <input id="register" type="submit" value="Register" />
        </form>
    </div>
  )
}
