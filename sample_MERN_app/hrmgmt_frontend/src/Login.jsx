
import {useState} from "react"
import { useNavigate} from "react-router-dom"

function Login() {
    let[emailid,setEmailid]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()
    let handleLogin=(event)=>{
        event.preventDefault()
        if(emailid=="admin@gmail.com" && password=="admin"){
            navigate("/userhome")
        }else{
            setError("invalid credentials")
        }
    

    
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="enter email-id" value={emailid} onChange={(e)=>setEmailid(e.target.value)}></input><br></br>
                <input type="password" placeholder="enter password" value={password}
                onChange={(e)=>setPassword(e.target.value)}/><br />
                <button type="submit">login </button>
            </form>

            {error && <div className="alert alert-danger">{error}</div> }        </div>
    )
}

export default Login;
