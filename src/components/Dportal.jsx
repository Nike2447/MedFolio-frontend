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
    <form onSubmit={handleSubmit} className='h-[350px]'>
      <div className="title text-white font-poppins font-bold">Sign In</div>
        <div className='input-container'>
          <label className='text-white px-10 font-poppins text-[25px]  mr-5 flex'>Doc_id</label>
          <input  
            type="text"
            name='uname'
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className='input-container'>
          <label htmlFor="password" className='text-white font-poppins text-[25px]  mr-10 flex'>Password</label>
          <input
            type="password"
            name='pass'
            required
          />
          {renderErrorMessage("pass")}
      </div>
        <div>
        <button type="submit" className={`px-4 py-2 font-poppins font-semibold ss:text-[35px] text-white bg-blue-gradient`}
        >Login</button>
        </div>
      </form>);  

  return (
      <div className='app bg-primary'>
        <div className='login-form bg-primary '>
            {isSubmitted ?<Link to="/main"><div><h1 className='text-white font-poppins'>Successfully loged in!</h1><button className='`px-4 py-2 font-poppins font-semibold ss:text-[20px] text-white bg-blue-gradient'>Go to Database</button></div></Link>: renderform} 
        </div>  
      </div>  
  );
};


export default Dportal;
