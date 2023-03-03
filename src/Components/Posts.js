import React ,{ useState, useEffect } from 'react';
import NewPosts from './NewPosts.js'

const Posts = ({ loggedIn, author }) => {
    const [ strangerList, setStrangerList ] = useState([])
    

    const getList = async() => {
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts')
            const results = await response.json()
            console.log(results.data.posts);
            setStrangerList(results.data.posts);
        }catch{console.error}
        
        }
    useEffect(() => {
        
        getList();
    }, [])

    const handleSubmit = (event, postid) => {
        event.preventDefault()

        fetch(`https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts/${postid}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('loginStatus')}`
            }
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .then(() => {
                getList()
            })
            .catch(console.error);
            
    }
    return (
        <div>

            { loggedIn ? <NewPosts getList={ getList } /> : null }
            
            
            {strangerList.map((singlePost, index) => {
                return (
                <div key={index} style={{borderBottom:'solid 1px darkGreen', padding:'15px'}}>
                    <h2 style={{display:'flex',justifyContent:'center',color:'darkGreen'}}>{singlePost.title}</h2>
                    <h3>{singlePost.active}</h3>
                    <h3>{singlePost.author.username}</h3>
                    <h3 style={{display:'none'}}>{singlePost.cohort}</h3>
                    <h3>{singlePost.description}</h3>
                    <h3>{singlePost.isAuthor}</h3>
                    <h3>{singlePost.location}</h3>
                    <h3>{singlePost.price}</h3> 
                    <h3>{singlePost.willDeliver}</h3> 
                    {author === singlePost.author.username ? <button style={{backgroundColor:'darkGreen', color:'white'}} onClick={()=>handleSubmit(event, singlePost._id)}>Delete</button> : null}
                </div>
                )
            })
        }
        </div>
    )

    
}

export default Posts;