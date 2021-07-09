import React, { useState } from "react";
import './Register.scss'

const RegisterUser= ()=>{
  
const initState ={
    fName:"",
    lName:"",
    email:"",
    password:"",
    confirmPswd:""
};
const [userDetails, setUserDetails] = useState(initState);
const [userValidation, setUserValidation]= useState({
    statusErrorMessage:"",
    statusSuccessMessage:""
    })
 const onFormSubmit=(e)=>{
     e.preventDefault();
     if(userDetails.fName && userDetails.email && userDetails.password){
         if(userDetails.password === userDetails.confirmPswd){
             sessionStorage.setItem("name", userDetails.fName+''+userDetails.lName)
             sessionStorage.setItem('email', userDetails.email);
             sessionStorage.setItem('password' , userDetails.password);
             sessionStorage.setItem('status' , 'userRegistered');
             setUserValidation({...userValidatation, statusErrorMessage:'', statusSuccessMessage:'User Sucessfully Registeres'});
             setUserDetails(initState);
         }
         else{
             setUserValidation({...userValidation, statusErrorMessage:'Passwords do not match '});

         }
        
     } else{
        setUserValidation({...userValidation, statusErrorMessage: 'Please enter FirstName , LastName & Password'
            
        })
    }
 }



 return (
     <div className='register'>
         <aside>
             <h1>Sign Up</h1>
             <p> We dont share your personal Details with anyone</p>
         </aside>
         <section className='register-form'>
             <form onSubmit={onFormSubmit}>
                 <input placeholder='First Name' required value={userDetails.fName} 
                 onChange={(e)=>{
                     setUserDetails({...userDetails, fName: e.target.value})
                 }}/>
                   <input placeholder='Last Name' required value={userDetails.lName} 
                 onChange={(e)=>{
                     setUserDetails({...userDetails, lName: e.target.value})
                 }}/>
                   <input placeholder='Email' required value={userDetails.email} 
                 onChange={(e)=>{
                     setUserDetails({...userDetails, email: e.target.value})
                 }}/>
                   <input placeholder='Password' required value={userDetails.password} 
                 onChange={(e)=>{
                     setUserDetails({...userDetails, password: e.target.value})
                 }}/>
                   <input placeholder='Confirm Password' required value={userDetails.confirmPswd} 
                 onChange={(e)=>{
                     setUserDetails({...userDetails, confirmPswd: e.target.value})
                 }}/>
                 <p>
                     {userValidation.statusErrorMessage || userValidation.statusSuccessMessage}
                 </p>
                 <button> SignUp</button>
             </form>
         </section>
     </div>
 )
}

export default RegisterUser;
