import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand text-light" href="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" href="/create-user">Create User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href="/ShowUser">Show User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container mt-5 p-5 d-flex justify-content-center align-items-center'>
        <h1 className='display-1 fw-light mt-5'>
          Welcome to home page 👋
        </h1 >
      </div>

    </>
  )
};

export default index;