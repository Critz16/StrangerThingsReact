import React from 'react';
import {Link} from 'react-router-dom'


const Header = ({loggedIn, setLoggedIn, setAuthor}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoggedIn(false);
        setAuthor('');

        window.localStorage.clear()

    }
    
    return(
        <div>

            {!loggedIn ? <Link to='/login'>Login</Link> : <button style={{backgroundColor:'darkGreen', color:'white'}} onClick={handleSubmit}>Logout</button>}
        
        </div>
    )
}

export default Header;