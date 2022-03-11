import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import './navbar.scss'

export const Navbar = () => {
    const {token, handleLogout} = useContext(AuthContext)
    return (
        <>  
            <div id="navbar">
                <div className="nav-container">
                    <div className="left-navbar">ATools<span>.</span></div>
                    <div className="right-navbar">
                        <button type="button" className='free-trial'>Start free Trial</button>
                        {
                            token? <button type="button" onClick={handleLogout} className='login'> Logout </button>
                            : <button type="button"  className='login'> Login</button>
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}