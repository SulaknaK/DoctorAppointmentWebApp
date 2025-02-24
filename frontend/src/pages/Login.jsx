import React, { useState } from 'react'

function Login() {

  const [state, setState] = useState('Sign Up')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async (event) =>{
      event.preventDefault()
  }

  return (
    <form className='min-f-[80vh] flex items-center'> 
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg  '>
        <p className='text-2xl font-semibold'>{state === 'Sign Up'? "Create Account":"Login"}</p>
        <p>Please {state === 'Sign Up'? "sign up":"log in"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-fill'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded  w-full p-2 m-1' type="text" onChange={(e)=>setName(e.target.name)} value={name}></input>
        </div>
        }
        <div className='w-fill'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded  w-full p-2 m-1' type="email" onChange={(e)=>setEmail(e.target.email)} value={email}></input>
        </div>
        <div className='w-fill'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded  w-full p-2 m-1' type="password" onChange={(e)=>setPassword(e.target.password)} value={password}></input>
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up'? "Create Account":"Login"}</button>
        {
          state ==="Sign Up"
          ? <p>Already have an account?<span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login Here</span></p>
          : <p>Create an new account?<span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Click Here</span></p>
        }
      </div>
      
    </form>
  )
}

export default Login
