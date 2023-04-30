import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from "../../assets/eyoologo.png";
import axiosClient from '../../axios';


export default function Register() {
    const router=useNavigate();
    const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState({__html:''});
  const [errors,setErrors]=useState('');

  const onSubmit=(e)=>{
    e.preventDefault();
    setError({__html:''});

    axiosClient.post('/user/register',{
      fullName,
      email,
      password,
    })
    .then(({data})=>{
      console.log(data);  
      router('/eyoofun/login');
      
    })
    .catch((error)=>{
      if(error && error.response){
      const finalErrors= Object.values(error.response.data.errors).reduce((accum,next)=>[...accum,...next],[]);
     
      setError({__html:finalErrors.join('<br/>')})
      setErrors(error.response.data.errors);
      }
      console.log(error.response.data.errors);
    })
  }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up Here 
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/eyoofun/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login with your Account!              
              </Link>
            </p>

            {/* {error.__html && (<div className='bg-red-500 rounded py-2 px-3 text-white' dangerouslySetInnerHTML={error}></div>)} */}

          <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={fullName}
                  onChange={e=>setFullName(e.target.value)}
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
              </div>
              {  errors.fullName &&
              <small className='font-bold text-red-500'>{errors.fullName}</small>
              }
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="relative mt-7 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              {  errors.email &&
              <small className='font-bold text-red-500'>{errors.email}</small>
              }
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="relative mt-7 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
              {  errors.password &&
              <small className='font-bold text-red-500'>{errors.password}</small>
              }
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </form>
          </div>
        </div>
      </>
    )
  }
  