import './navbar.scss'

export const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div className="nav-container">
                    <div className="left-navbar">ATools<span>.</span></div>
                    <div className="right-navbar">
                        <button type="button" className='free-trial'>Start free Trial</button>
                        <button type="button" className='login'>Login</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}