import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail =(e)=>{
    setEmail(e.target.value);
  }
  const handleChangePassword =(e)=>{
    setPassword(e.target.value);
  }
  const submitForm = (e) =>{
    e.preventDefault();
    const re = /\S+@\S+\.\S+/
    console.log(password.length);
    if(re.test(email) === true && password.length !== 0) {
      alert(`welcome ${email} to my app`);
    }
    else {
      alert(`nope you enter wrong account`)
    }
    
  }
  return (
    <div className="App">
    <form onSubmit={submitForm}>
    <input placeholder="enter your email address" onChange={handleChangeEmail}></input>
     <input placeholder="Enter your password" type="password" onChange={handleChangePassword}></input>
     <br></br>
     <button onSubmit={submitForm}>Submit</button>
    </form>
    </div>
  );
}

export default App;
