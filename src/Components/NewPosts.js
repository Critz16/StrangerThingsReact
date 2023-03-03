import React, {useState} from 'react';


const NewPosts = ({ getList }) =>{
    const [ titleInput, setTitleInput] = useState('')
    const [ descriptionInput, setDescriptionInput] = useState('')
    const [ priceInput, setPriceInput] = useState('')


    const handleSubmit = (event) =>{
        event.preventDefault();


        fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('loginStatus')}`
            },
            body: JSON.stringify({
                post: {
                    title: titleInput,
                    description: descriptionInput,
                    price: priceInput,
                    willDeliver: true
                }
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .then(() => {
            getList();
        })
        .catch(console.error);


    }   

    return (
        <div>
            <h1 style={{color:'darkGreen', borderBottom:'solid 1px darkGreen'}}>
                New Post
            </h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={titleInput} onChange={(event) => setTitleInput(event.target.value)}/>Title
                <input type='text' value={descriptionInput} onChange={(event) => setDescriptionInput(event.target.value)}/>Description
                <input type='text' value={priceInput} onChange={(event) => setPriceInput(event.target.value)}/>Price
                <button style={{backgroundColor:'darkGreen',color:'white'}} type='submit'>Submit</button>
            </form>

            
        </div>

    )
    
}






export default NewPosts