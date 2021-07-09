import React, {useState, useContext} from 'react';
import  '../Register/Register.scss'

const SignIn =()=>{
const initState ={
    email:'',
    password:'',
}
const [userDetails, setUserDetails] = useState(initState);
const [userValidation, setUserValidation]= useState('');

const onFormSubmit = (e)=>{
    e.preventDefault();
    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');
    if(  userDetails.email === email && userDetails.password === password){
        sessionStorage.setItem('stutus', 'loggedIn')
    }else{
        setUserValidation('Invalid credentials')

    }

    };
    return (
        <div className='signin'>
            <aside>
                <h1>SignIn</h1>
                <p>Get access to your orders, wishlist and recommedations</p>
            </aside>
            <section className='signin-form'>
                <form onSubmit={onFormSubmit}>
                    <input
                    placeholder="Email"
                    required
                    value= {userDetails.email}
                    onChange={(e)=>{
                        setUserDetails({ ...userDetails, email: e.target.value });
                    }}/>
                    <input
                    placeholder="Password"
                    required
                    value= {userDetails.password}
                    onChange={(e)=>{
                        setUserDetails({ ...userDetails, password: e.target.password });
                    }}/>
                    <p>
                        {userValidation}
                    </p>
                    <button>
                        Login
                    </button>


                    

                </form>

            </section>
        </div>
    )
}

export default SignIn;
