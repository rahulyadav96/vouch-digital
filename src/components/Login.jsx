import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./login.scss";

export const Login = () =>{
    const {token, handleLogin} = useContext(AuthContext);

    const [loginData,setLoginData]  = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setLoginData({...loginData,[name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

    

    }

    return (
            <div id="login">
                    <div className = "login-wrapper">
                        <div className="login-form-container">
                            <h2>Welcom Back</h2>
                            <p>Sub-title text goes here</p>
                            <form onSubmit={handleSubmit}>
                                <input type="email" name="email" onChange={handleChange} placeholder="Email Address" value={loginData.email} />
                                <input type="password" name="password" onChange={handleChange} placeholder="Password" value={loginData.password}/>
                                <input type="submit" value="Login" />
                            </form>
                            <div>
                                <span>
                                    <input type="checkbox" /> Remember Password
                                </span>
                                <span>Forgate Password?</span>
                            </div>
                        </div>
                        <div className="banner-container">
                           <img src="https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784__340.jpg" alt="banner" /> 
                        </div>
                    </div>
            </div>
    )
}