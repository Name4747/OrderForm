import React, { useState } from 'react'
import Expand from './expand'

const Staffview = () => {

    const datacolumns = [
        { field: 'id', headerName: 'ID', width: 130, renderCell: null},
        { field: 'type', headerName: 'Type', width: 130, renderCell: null},
        { field: 'style', headerName: 'Style', width: 130, renderCell: null},
        { field: 'mat1',headerName: 'Material 1', width: 130, renderCell: null},
        { field: 'mat2',headerName: 'Material 2', width: 130, renderCell: null},
        { field: 'mat3',headerName: 'Material 3', width: 130, renderCell: null},
        { field: 'email',headerName: 'Email', width: 130, renderCell: null},
        { field: 'fullName',headerName: 'Full Name', width: 130, renderCell: null},
        { field: 'phone',headerName: 'Phone#', width: 130, renderCell: null},
    ];

    /*const datarows = [
        { id: 1, type: 'Spring', style: 'old', mat1: 'orange', mat2: 'red', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2511283472'},
        { id: 2, type: 'Michigan', style: 'new', mat1: 'blue', mat2: 'shiny', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Emma Redding', phone: '2534732874'},
        { id: 3, type: 'Wenge', style: 'fun', mat1: 'rough', mat2: 'yellow', mat3: 'teal', email: 'awhd@awhd.com', fullName: 'John Smith', phone: '2934563874'},
        { id: 4, type: 'Birch', style: 'fancy', mat1: 'green', mat2: 'black', mat3: 'green', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '7015742874'},
        { id: 5, type: 'Renny', style: 'pretty', mat1: 'orange', mat2: 'red', mat3: 'black', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2385563674'},
        { id: 6, type: 'Snow', style: 'Jon', mat1: 'orange', mat2: 'red', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2534732874'},
        { id: 7, type: 'Snow', style: 'Jon', mat1: 'orange', mat2: 'red', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2534732874'},
        { id: 8, type: 'Snow', style: 'Jon', mat1: 'orange', mat2: 'red', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2534732874'},
        { id: 9, type: 'Snow', style: 'Jon', mat1: 'orange', mat2: 'red', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2534732874'},
        { id: 10, type: 'Snow', style: 'Jon', mat1: 'orange', mat2: 'red', mat3: 'rough', email: 'awhd@awhd.com', fullName: 'Jon Snow', phone: '2534732874'},
    ];*/

    const [rows, setRows] = useState([])
    const [columns, setColumns] = useState([])

    //bcrypt

    const handleSubmit = () => {
        let par = prompt("Password")
        const config = {
            "method" : "POST",
            "headers" : {
                "Content-Type" : "application/json"
            },
            "body" : JSON.stringify({
                par
            })
        }
        fetch('answer',config)

        fetch('/login')
            .then(res => res.json())
            .then(data => {
                if(data !== null) {
                    alert("Correct")
                    setRows(data)
                    setColumns(datacolumns)
                }
                else {
                    alert("Incorrect")
                }
        })
    }

    return (
        <>
        <button onClick={handleSubmit}>Login</button>
        <div className="datagrid">
            <Expand rows={rows} columns={columns}/>
        </div>
        </>
    )
}

export default Staffview
