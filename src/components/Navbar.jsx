import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import './navbar.scss'

export const Navbar = () => {
    const {token} = useContext(AuthContext)
    return (
        <>  
            <div id="navbar">
                <div className="nav-container">
                    <div className="left-navbar">ATools<span>.</span></div>
                    <div className="right-navbar">
                        <button type="button" className='free-trial'>Start free Trial</button>

                        <button type="button" className='login'> {token?"Login":"Logout"}</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}