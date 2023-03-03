import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Register from './Components/Register.js';
import Login from './Login.js';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Posts from './Components/Posts.js';
import Header from './Components/Header.js';
import Profile from './Components/Profile.js';


const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [ author, setAuthor] = useState('');

    return(
        <div>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setAuthor={setAuthor}/>    
        

            <Routes>
                <Route path='/#' element={<App />}></Route>
                <Route path='/posts' element= {<Posts loggedIn={loggedIn}  author={author}/>}></Route>
                <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setAuthor={setAuthor} />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes>
            <Posts loggedIn={loggedIn}  author={author}/>
        </div>
    )
}





const container= document.getElementById('root');
const root =createRoot(container);
root.render(<HashRouter>
             <App />
             </HashRouter>);
