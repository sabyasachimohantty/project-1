import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const CreateProblem = () => {

    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [acceptance, setAcceptance] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/create-problem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                difficulty,
                acceptance,
                id
            })
        })
            .then((response) => {
                const data = response.json()
                .then(data => {
                    if (data.status === 'ok') {
                        alert('Problem is created!')
                    } else {
                        alert('Problem already exists')
                    }
                })
                .catch(err => console.log(err))
            })
    }

    return (
        <>
            <Navbar />
            <div className="create-problem">
                <h1>Create Problem</h1>
                <form action="" className='problem-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Problem Title' onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder='Difficulty'  onChange={(e) => setDifficulty(e.target.value)} />
                    <input type="text" placeholder='Acceptance Rate' onChange={(e) => setAcceptance(e.target.value)} />
                    <input type="text" placeholder='Problem Id' onChange={(e) => setId(e.target.value)} />
                    <button type='submit'>Create</button>
                </form>
            </div>
            
        </>
    )
}

export default CreateProblem
