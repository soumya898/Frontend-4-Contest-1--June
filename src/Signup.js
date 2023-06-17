
import React, {useState} from "react"


const Signup=()=>{

    const [name, setName] = useState("");
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword, setConfirmPassword ]=useState("");
    const [errormsg, setErrMsg] = useState("");
    const [sucessMsg, setSucessMsg] = useState("");


   function formSubmit(event){
        event.preventDefault();

        if((!(name &&email && password & confirmpassword))){
            setErrMsg(" * All the fields are mandatory")
            return;

        }
        if(name.trim() === ""  && !name.trim().includes(" ")){
            setErrMsg("Full name is required");
              return
        }
        

    return(
        <div className="sign-up">
            <h1> Signup</h1>
         <form>
        <input type="text" placeholder=" Full Name "   onChange={(event)=> setName(event.target.value)}/> <hr></hr>
        <input type="email" placeholder="email" onChange={(event)=> setEmail(event.target.value)} /> <hr></hr>
         <input type="password" placeholder=" password"   onChange={(event)=> setPassword(event.target.value)}/> <hr></hr>
        <input type="password" placeholder="Confirm Password"  onChange={(event)=> setConfirmPassword(event.target.value)}/><hr></hr>
        
  
        {errormsg && <p id="errorMsg">{errormsg}</p>}
          {/* {succMsg && <h4 id="success">{succMsg}</h4>} */}
        
        <button type="submit"  onClick={formSubmit}> Submit </button>
        </form>
        </div>
        

    )
}
}
export default Signup ;