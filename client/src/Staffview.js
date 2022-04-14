import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age',headerName: 'Age',type: 'number',width: 90,},
  ];

const Staffview = () => {

    const handleSubmit = () => {
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Staff Login</h1>
            <label>User</label><br/>
            <input className="inputs"/>
            <br/>
            <label>Password</label><br/>
            <input className="inputs"/>
            <br/>
            <input type="submit" value="Login"/>
        </form>
        <div>

        </div>
        </>
    )
}

export default Staffview
