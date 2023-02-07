import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.jpg'
import axios from 'axios';

const Registration = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const url = `${process.env.REACT_APP_BASE_URL}/users`;

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post(url, {name, email}).then(res => {
      setLoading(false);
      if(res.status === 201) {
        setSuccess("Registration Successful");
      } else {
        setError(res.message);
      }
    }).catch((err) => {
      setLoading(false)
      setError(err.message);
    })
  }

  return (
    <div className=''>
        <div className="container">
      <div className="row mt-5 pt-5">
        {/* <div className="text-center"> */}
          <form onSubmit={(e) => submitForm(e)} className="col-10 col-lg-6 text-center container shadow border p-5">
              <img src={logo} alt="ENI Logo" loading='lazy' width={'70px'} />
                {/* <h2>Eagles Network International</h2> */}
                <p className=''>Worship Experience registration form</p>
                <div className={error && !loading ? "alert alert-danger text-danger" : ""}>{error}</div>
                <div className={success && !loading ? "alert alert-success text-success" : ""}>{success}</div>
                <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} required className="w-100 form-control py-2 my-3" placeholder="Full Name"/>
                <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} className="w-100 form-control py-2 my-3" placeholder="Email" />
                <button className="btn btn-primary w-100" disabled={loading} >{loading ? <span className="spinner-border" role={'status'}></span> : "Submit"}</button>
            </form>
        {/* </div> */}
      </div>
    </div>
    </div>
  )
}

export default Registration