import React, { useState } from 'react';
import './Styling/Login.css';
import styles from '../style' 
import {Link, Route, Routes,} from 'react-router-dom';



const Dportal = ({history}) => {
  const [errorMessage,setErrorMessage]=useState({});
  const [isSubmitted,setIsSubmitted]=useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const database = [
    {
      username: "admin",
      password: "admin"
    }
  ];
  const errors={
    uname : "invalid username",
    pass : "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user)=>user.username==uname.value);

    if (userData){
      if (userData.password!=pass.value){
        setErrorMessage({name: 'pass',message: errors.pass});
      }
      else {
        setIsSubmitted(true);
        history.push('/main')
      }
    }
    else{
      setErrorMessage({name : "uname",message: errors.uname})
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessage.name && (
      <div className="text-white">{errorMessage.message}</div>
    );

  const renderform = (
    <form onSubmit={handleSubmit} className='h-[400px]'>
      <div className="title text-white font-poppins font-bold cursor-[default]">Sign In</div>
        <div className='input-container'>
          <label className='text-white font-poppins text-[20px]'>Doctor ID</label>
          <input  
            type="text"
            name='uname'
            placeholder='ID'
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className='input-container'>
          <label htmlFor="password" className='text-white font-poppins text-[20px]'>Password</label>
          <input
            class="input"
            className='text-white'
            type="password"
            placeholder='Password'
            name='pass'
            required
          />
          {renderErrorMessage("pass")}
      </div>
        <div>
        <button type="submit" className='button-2 bg-white text-black'
        >Login</button>
        </div>
      </form>);  

  return (
      <div className='app bg-primary'>
        <div className='login-form '>
            {isSubmitted ?<Link to="/main"><div className="success"><h1 className='text-white font-poppins justigy-content-center py-[10px] font-semibold'>Successfully loged in!</h1><button className='button-3 text-black'>Go to Database</button></div></Link>: renderform} 
        </div>  
      </div>  
  );
};


export default Dportal;
