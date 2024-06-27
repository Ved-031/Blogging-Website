// import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import OAuth from '../components/OAuth.jsx'

const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: errorMessage, loading } = useSelector(state => state.user);

  const [formData, setFormData] = useState({});

  const onChangeHandler = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure("All fields are required"));
    }
    try {
      dispatch(signInStart());
      await axios.post('/api/user/login', formData)
      .then((response)=>{
        if(response.data.success === false){
          dispatch(signInFailure(response.data.message));
        }
        dispatch(signInSuccess(response.data))
        setFormData({});
        navigate('/');
      })
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className='flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 md:gap-10'>

        {/* left */}
        <div className="flex-1">
        <Link to="/" className='text-3xl font-bold dark:text-white'>
            <span className='px-2 py-1 text-purple-500 dark:text-white'>Blog</span>Web
        </Link>
        <p className='text-sm mt-5'>
          This is a Blogging website. You can sign in with your email and password or with Google.
        </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
              <div>
                <Label value='Your Email'/>
                <TextInput 
                  type='email' 
                  placeholder='Email' 
                  id='email' 
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <Label value='Your Password'/>
                <TextInput 
                  type='password' 
                  placeholder='Password' 
                  id='password' 
                  onChange={onChangeHandler}
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' className='transition' disabled={loading}>
                {
                  loading ? (
                    <div className='flex items-center gap-2'>
                      <Spinner size='sm'/>
                      <span>Loading...</span>
                    </div>
                ) : "SignIn"
                }
              </Button>
              <OAuth/>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have an account?</span>
              <Link to='/signup' className='text-blue-500 font-semibold'>
                Sign Up
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignIn