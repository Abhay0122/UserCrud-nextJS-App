import React, { useContext, useState } from 'react'
import { UserContext } from "../context/Context";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import Link from 'next/link';

const CreateUser = () => {
    const [User, setUser] = useContext(UserContext);
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const onSubmitHanlder = (e) => {
        e.preventDefault();

        if (
            name.trim().length <= 0 ||
            email.trim().length <= 0 ||
            password.trim().length <= 0
        ) {
            toast.error("input must not be empty!");
            return;
        }
        else if (
            name.trim().length >= 4 &&
            email.trim().length >= 10 &&
            password.trim().length >= 6
        ) {
            const userDets = {
                id: nanoid(),
                name,
                email,
                password
            }
            setUser([...User, userDets]);
            toast.success("User created successfully!")
            setemail('');
            setname('');
            setpassword('');
            console.log(User);
        }
        else {
            toast.error("length must be more than 4!")
        }

    }




    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" href="/">Home</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light" href="/ShowUser">Show User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='container mt-5 p-5 '>
                <h1 className='fw-light mb-5'>Create User</h1>
                <form onSubmit={onSubmitHanlder}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1"
                            value={name} name='name' onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={email} onChange={(e) => setemail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            value={password} onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Create user</button>
                </form>
            </div>
        </>
    )
}

export default CreateUser