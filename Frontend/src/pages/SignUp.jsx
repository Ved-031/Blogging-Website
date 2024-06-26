// import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className='flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 md:gap-10'>
        {/* left */}
        <div className="flex-1">
        <Link to="/" className='text-3xl font-bold dark:text-white'>
            <span className='px-2 py-1 text-purple-500 dark:text-white'>Blog</span>Web
        </Link>
        <p className='text-sm mt-5'>
          This is a Blogging website. You can signup with your email and password or with Google.
        </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <div>
            <form className='flex flex-col gap-4'>
              <div>
                <Label value='Your username'/>
                <TextInput 
                  type='text' 
                  placeholder='Username' 
                  id='username' 
                  name='username'
                />
              </div>
              <div>
                <Label value='Your Email'/>
                <TextInput 
                  type='email' 
                  placeholder='Email' 
                  id='email' 
                  name='email'
                />
              </div>
              <div>
                <Label value='Your Password'/>
                <TextInput 
                  type='password' 
                  placeholder='Password' 
                  id='password' 
                  name='password'
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' className='transition'>Sign Up</Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/signin' className='text-blue-500 font-semibold'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp