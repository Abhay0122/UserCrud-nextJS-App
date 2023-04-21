import { UserContext } from '@/context/Context'
import Link from 'next/link';
import React, { useContext } from 'react'
import 'remixicon/fonts/remixicon.css'

const ShowUser = () => {
    const [User, setUser] = useContext(UserContext);

    const deleteUser = (id) => {
        // console.log(id);
        let copyTask = [...User]
        copyTask.splice(0, 1)
        setUser(copyTask);
    }

    let userList = <h1>No User Found!</h1>
    if (User.length > 0) {
        userList = User.map((u) => (
            <ul key={u.id} className='list-group'>
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    {u.name}
                    <span>
                        <Link href={`/ShowUser/edit/${u.id}`} className='me-3 text-decoration-none text-dark'>
                            <i className="ri-edit-box-fill"></i>
                        </Link>
                        <span onClick={() => deleteUser(u.id)}><i className="ri-delete-bin-7-fill"></i></span>
                    </span>
                </li>
            </ul>
        ))
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href="/">Home</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="/create-user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*  */}
            <div className='container mt-5 p-5'>
                {userList}
            </div>
        </>
    )
}

export default ShowUser