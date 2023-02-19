import React, { useState } from 'react';

export const JobForm = ({onSubmit}) => {
    const [userJob, setUserJob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userJob);
        setUserJob('')
    };

    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit} style={{margin:'1%'}}>
                <div className='inputforms'>
                    <label>Search Job:</label>
                    <input 
                        className="form-control" 
                        type="text" name="job" 
                        value={userJob} 
                        onChange={e => setUserJob(e.target.value)} 
                    />
                </div>
                <input className='inputBtn' type="submit" value="Search" />
            </form>
        </div>
    )
}