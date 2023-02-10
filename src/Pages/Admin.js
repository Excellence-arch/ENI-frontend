import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Admin = () => {
    const [users, setUsers] = useState([]);
    const baseUrl = `${process.env.REACT_APP_BASE_URL}/users/`

    useEffect(() => {
        axios.get(baseUrl).then((res) => {
            if(res.status === 200) {
                console.log(res.data)
                setUsers(res.data);
            }
        })
    }, [])
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='container text-center mt-3'>
                    <table className='table table-bordered'>
                        <thead className='thead'>
                            <tr>
                                <td>S/N</td>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((val, i) => (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin