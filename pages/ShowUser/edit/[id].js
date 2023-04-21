import { UserContext } from '@/context/Context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const [User, setUser] = useContext(UserContext);
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('');

  const GetUser = () => {
    const u = User.filter((u) => u.id == id)[0];
    setname(u.name);
    setemail(u.email);
    setpassword(u.password);
  };

  const onEditSubmitHanlder = (e) => {
    e.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      toast.error("Chutiya hai kya!!!");
      return;
    }

    const editedUser = {
      name,
      email,
      password
    }

    const findIndex = User.findIndex((u) => u.id === id);
    const copiedUser = [...User];
    console.log(copiedUser);
    copiedUser[findIndex] = {...copiedUser[findIndex], ...editedUser};
    setUser(copiedUser)
    toast.info("User updated successfully!");
    router.push('/ShowUser')
  };

  useEffect(() => {
    GetUser();
  }, []);

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
              <li className="nav-item">
                <Link className="nav-link text-light" href="/create-user">Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  */}

      <div className='container mt-5 p-5 '>
        <h1 className='fw-light mb-5'>Edit User</h1>
        <form onSubmit={onEditSubmitHanlder}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName1"
              value={name} onChange={(e) => setname(e.target.value)}
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
          <button type="submit" className="btn btn-danger">Edit user</button>
        </form>
      </div>

    </>
  )
}

export default EditUser;